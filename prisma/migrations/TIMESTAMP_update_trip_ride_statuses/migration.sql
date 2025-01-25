-- Backup existing trip statuses
CREATE TABLE "_trip_status_backup" AS 
SELECT id, status FROM "Trip";

-- Create temporary column with new status
ALTER TABLE "Trip" 
ADD COLUMN "new_status" varchar(255);

-- Map existing statuses to new ones
UPDATE "Trip"
SET "new_status" = status::text;

-- Drop the old status column
ALTER TABLE "Trip" DROP COLUMN "status";

-- Rename new column
ALTER TABLE "Trip" RENAME COLUMN "new_status" TO "status";

-- Convert to enum type
ALTER TABLE "Trip" 
ALTER COLUMN "status" TYPE "TripStatus" 
USING status::text::"TripStatus";

-- Set constraints
ALTER TABLE "Trip" 
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'SCHEDULED';

-- Add new RideStatus values safely
DO $$ 
BEGIN
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'PICKUP_PENDING';
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ 
BEGIN
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'PICKED_UP';
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ 
BEGIN
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'DROP_PENDING';
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ 
BEGIN
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'DROPPED_OFF';
EXCEPTION
    WHEN duplicate_object THEN null;
END $$; 
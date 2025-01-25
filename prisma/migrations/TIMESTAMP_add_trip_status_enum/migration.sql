-- First check if TripStatus exists, if not create it
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'tripstatus') THEN
        CREATE TYPE "TripStatus" AS ENUM (
            'SCHEDULED',
            'DRIVER_ASSIGNED',
            'IN_PROGRESS',
            'COMPLETED',
            'CANCELLED'
        );
    END IF;
END
$$;

-- Create temporary column for new status
ALTER TABLE "Trip" 
ADD COLUMN "new_status" "TripStatus";

-- Copy data to new column with mapping
UPDATE "Trip"
SET "new_status" = CASE status::text
  WHEN 'SCHEDULED' THEN 'SCHEDULED'::"TripStatus"
  WHEN 'IN_PROGRESS' THEN 'IN_PROGRESS'::"TripStatus"
  WHEN 'COMPLETED' THEN 'COMPLETED'::"TripStatus"
  WHEN 'CANCELLED' THEN 'CANCELLED'::"TripStatus"
  ELSE 'SCHEDULED'::"TripStatus"
END;

-- Drop old column
ALTER TABLE "Trip" DROP COLUMN "status";

-- Set constraints on new column
ALTER TABLE "Trip" ALTER COLUMN "new_status" SET NOT NULL;
ALTER TABLE "Trip" ALTER COLUMN "new_status" SET DEFAULT 'SCHEDULED';

-- Rename the new column
ALTER TABLE "Trip" RENAME COLUMN "new_status" TO "status";

-- Update RideStatus enum by adding new values
DO $$ 
BEGIN
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'PICKUP_PENDING';
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'PICKED_UP';
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'DROP_PENDING';
    ALTER TYPE "RideStatus" ADD VALUE IF NOT EXISTS 'DROPPED_OFF';
EXCEPTION
    WHEN duplicate_object THEN null;
END
$$; 
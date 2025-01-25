-- First create the new enums
CREATE TYPE "TripStatus" AS ENUM (
  'SCHEDULED',
  'DRIVER_ASSIGNED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED'
);

CREATE TYPE "RideStatus_new" AS ENUM (
  'SCHEDULED',
  'PICKUP_PENDING',
  'PICKED_UP',
  'DROP_PENDING',
  'DROPPED_OFF',
  'CANCELLED',
  'NO_SHOW'
);

-- First alter Trip table to drop the default value
ALTER TABLE "Trip" 
ALTER COLUMN status DROP DEFAULT;

-- Then modify Trip table to use varchar temporarily
ALTER TABLE "Trip" 
ALTER COLUMN status TYPE varchar(255);

-- Then modify Ride table to use varchar temporarily
ALTER TABLE "Ride" 
ALTER COLUMN status TYPE varchar(255);

-- Now we can safely drop the old enum
DROP TYPE "RideStatus";

-- Rename new RideStatus enum
ALTER TYPE "RideStatus_new" RENAME TO "RideStatus";

-- Update the data in Trip table
UPDATE "Trip"
SET status = CASE status 
  WHEN 'SCHEDULED' THEN 'SCHEDULED'
  WHEN 'IN_PROGRESS' THEN 'IN_PROGRESS'
  WHEN 'COMPLETED' THEN 'COMPLETED'
  WHEN 'CANCELLED' THEN 'CANCELLED'
  ELSE 'SCHEDULED'
END;

-- Update the data in Ride table
UPDATE "Ride"
SET status = CASE status
  WHEN 'IN_PROGRESS' THEN 'PICKUP_PENDING'
  WHEN 'COMPLETED' THEN 'DROPPED_OFF'
  ELSE status
END;

-- Now alter Trip table to use TripStatus with new default
ALTER TABLE "Trip"
ALTER COLUMN status TYPE "TripStatus" USING status::text::"TripStatus",
ALTER COLUMN status SET DEFAULT 'SCHEDULED';

-- Finally alter Ride table to use new RideStatus
ALTER TABLE "Ride"
ALTER COLUMN status TYPE "RideStatus" USING status::text::"RideStatus"; 
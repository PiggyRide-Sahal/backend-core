/*
  Warnings:

  - Added the required column `direction` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RideRequest" DROP CONSTRAINT "RideRequest_dropStopId_fkey";

-- DropForeignKey
ALTER TABLE "RideRequest" DROP CONSTRAINT "RideRequest_pickupStopId_fkey";

-- DropForeignKey
ALTER TABLE "RideRequest" DROP CONSTRAINT "RideRequest_routeId_fkey";

-- AlterTable
ALTER TABLE "Ride" ADD COLUMN     "direction" "Direction" NOT NULL;

-- AlterTable
ALTER TABLE "RideRequest" ADD COLUMN     "stops" JSONB,
ALTER COLUMN "routeId" DROP NOT NULL,
ALTER COLUMN "pickupStopId" DROP NOT NULL,
ALTER COLUMN "dropStopId" DROP NOT NULL,
ALTER COLUMN "expectedPickupTime" DROP NOT NULL,
ALTER COLUMN "expectedDropTime" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RideRequest" ADD CONSTRAINT "RideRequest_pickupStopId_fkey" FOREIGN KEY ("pickupStopId") REFERENCES "RouteStop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RideRequest" ADD CONSTRAINT "RideRequest_dropStopId_fkey" FOREIGN KEY ("dropStopId") REFERENCES "RouteStop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RideRequest" ADD CONSTRAINT "RideRequest_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

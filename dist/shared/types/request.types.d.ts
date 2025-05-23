import { RequestType, StopType } from './enums';
import { Coordinates } from './location.types';
export interface RequestStopBase {
    locationId: string;
    stopType: StopType;
    sequence: number;
    requestedTime: Date;
}
export interface CreateRideRequestDTO {
    routeId: string;
    teenId: string;
    requestType: RequestType;
    seatsRequired: number;
    expectedPickupTime: Date;
    expectedDropTime: Date;
    stops: RequestStopBase[];
}
export interface RideRequestFilter {
    userId?: string;
    teenId?: string;
    routeId?: string;
    status?: string;
    requestType?: RequestType;
    fromDate?: Date;
    toDate?: Date;
}
export interface RouteDeviationRequest {
    routePoints: Array<Coordinates & {
        sequence: number;
    }>;
    newPoints: Coordinates[];
    constraints?: {
        maxDetour?: number;
        maxDelay?: number;
    };
}

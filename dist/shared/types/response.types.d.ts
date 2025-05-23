import { RouteStatus } from './enums';
import { RequestStopBase } from './request.types';
import { ValidatedLocation } from './location.types';
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        message: string;
        details?: any;
    };
}
export interface RideRequestResponse {
    id: string;
    status: RouteStatus;
    createdAt: Date;
    updatedAt: Date;
    stops: RequestStopBase[];
    schedule?: {
        pickupTime: Date;
        dropTime: Date;
        daysOfWeek: number[];
    };
}
export interface DeviationAnalysisResponse {
    isValid: boolean;
    message?: string;
    impact?: {
        additionalDistance: number;
        additionalTime: number;
        affectedStops: Array<{
            stopId: string;
            currentTime: Date;
            newTime: Date;
            delay: number;
        }>;
    };
}
export interface LocationValidationResponse extends ValidatedLocation {
    alternatives?: ValidatedLocation[];
}

import { RouteStatus, RideStatus } from './enums';
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
    additionalDistance: number;  // in meters
    additionalTime: number;     // in seconds
    affectedStops: Array<{
      stopId: string;
      currentTime: Date;
      newTime: Date;
      delay: number;           // in seconds
    }>;
  };
}

export interface LocationValidationResponse extends ValidatedLocation {
  alternatives?: ValidatedLocation[];
} 
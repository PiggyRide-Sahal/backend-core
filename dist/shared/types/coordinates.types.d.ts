export interface Coordinates {
    latitude: number;
    longitude: number;
}
export interface BoundingBox {
    northeast: Coordinates;
    southwest: Coordinates;
}
export interface ServiceArea {
    name: string;
    center: Coordinates;
    radius: number;
}
export interface LocationBase {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    type: string;
    isVerified?: boolean;
    contactNumber?: string;
    operatingHours?: Record<string, string>;
    metadata?: Record<string, any>;
}
export interface LocationValidationResponse {
    isValid: boolean;
    message?: string;
    serviceArea?: {
        id: string;
        name: string;
    };
    restrictions?: Array<{
        type: string;
        description: string;
    }>;
}
export interface RouteCoordinates {
    origin: Coordinates;
    destination: Coordinates;
    waypoints?: Coordinates[];
}
export interface GeocodingResult extends Coordinates {
    formattedAddress: string;
    placeId?: string;
    components?: {
        street?: string;
        city?: string;
        state?: string;
        country?: string;
        postalCode?: string;
    };
}

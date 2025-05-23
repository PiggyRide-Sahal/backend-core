export interface Coordinates {
    latitude: number;
    longitude: number;
}
export interface Address {
    formattedAddress: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
}
export interface LocationBase {
    name: string;
    address: string | Address;
    coordinates: Coordinates;
}
export interface SearchLocation extends LocationBase {
    id: string;
    distance?: number;
}
export interface ValidatedLocation extends LocationBase {
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
export type LocationType = 'SCHOOL' | 'BUSINESS' | 'RESIDENTIAL' | 'BUS_STOP' | 'LANDMARK' | 'OTHER';
export type StopType = 'PICKUP' | 'DROP';
export interface LocationValidationRequest {
    coordinates: Coordinates;
    type: StopType;
    radius?: number;
}
export interface LocationSearchRequest {
    query: string;
    coordinates?: Coordinates;
    radius?: number;
    types?: LocationType[];
}

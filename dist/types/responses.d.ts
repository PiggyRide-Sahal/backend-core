import { UserRole } from './enums';
interface User {
    id: string;
    email: string;
    name: string;
    phone: string;
    role: UserRole;
}
export interface AuthResponse {
    token: string;
    user: User;
}
export interface LocationUpdate {
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    timestamp: string;
}
export interface DeviceStatusResponse {
    deviceId: string;
    status: string;
    lastPing: string;
    metadata?: any;
}
export interface RouteResponse {
    id: string;
    name: string;
    stops: Array<{
        location: string;
        scheduledTime: string;
        type: string;
    }>;
}
export interface PaymentResponse {
    transactionId: string;
    status: string;
    amount: number;
    receipt?: string;
}
export {};

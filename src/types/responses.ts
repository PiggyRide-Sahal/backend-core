import { UserRole } from './enums';

// Basic user type
interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
}

// Auth Responses
export interface AuthResponse {
  token: string;
  user: User;
}

// Location Update Response
export interface LocationUpdate {
  latitude: number;
  longitude: number;
  speed: number;
  heading: number;
  timestamp: string;
}

// Device Status Response
export interface DeviceStatusResponse {
  deviceId: string;
  status: string;
  lastPing: string;
  metadata?: any;
}

// Route Response
export interface RouteResponse {
  id: string;
  name: string;
  stops: Array<{
    location: string;
    scheduledTime: string;
    type: string;
  }>;
}

// Payment Response
export interface PaymentResponse {
  transactionId: string;
  status: string;
  amount: number;
  receipt?: string;
} 
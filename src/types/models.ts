import { UserRole, RouteStatus, PaymentStatus } from './enums';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Route {
  id: string;
  name: string;
  status: RouteStatus;
  stops: RouteStop[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RouteStop {
  id: string;
  routeId: string;
  location: string;
  latitude: number;
  longitude: number;
  sequence: number;
  scheduledTime: Date;
  actualTime?: Date;
}

export interface Payment {
  id: string;
  amount: number;
  status: PaymentStatus;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
} 
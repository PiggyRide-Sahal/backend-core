export * from './enums';
export * from './models';
export * from './responses';

// Base response type for all APIs
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
} 
export declare enum UserRole {
    PARENT = "PARENT",
    DRIVER = "DRIVER",
    TEEN = "TEEN",
    ADMIN = "ADMIN"
}
export declare enum DeviceType {
    GPS_TRACKER = "GPS_TRACKER",
    CAMERA = "CAMERA",
    PANIC_BUTTON = "PANIC_BUTTON",
    TEMPERATURE_SENSOR = "TEMPERATURE_SENSOR",
    FUEL_SENSOR = "FUEL_SENSOR",
    RFID_READER = "RFID_READER"
}
export declare enum DeviceStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    MAINTENANCE = "MAINTENANCE",
    MALFUNCTION = "MALFUNCTION"
}
export declare enum LocationType {
    SCHOOL = "SCHOOL",
    RESIDENTIAL = "RESIDENTIAL",
    COMMERCIAL = "COMMERCIAL",
    LANDMARK = "LANDMARK",
    OTHER = "OTHER"
}
export declare enum LocationCategory {
    PICKUP_POINT = "PICKUP_POINT",
    DROP_POINT = "DROP_POINT",
    BOTH = "BOTH"
}
export declare enum RouteFrequency {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY"
}
export declare enum RouteStatus {
    PENDING_APPROVAL = "PENDING_APPROVAL",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum StopType {
    PICKUP = "PICKUP",
    DROP = "DROP"
}
export declare enum TripStatus {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum RideStatus {
    REQUESTED = "REQUESTED",
    SCHEDULED = "SCHEDULED",
    ACCEPTED = "ACCEPTED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    NO_SHOW = "NO_SHOW"
}
export declare enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}
export declare enum PaymentType {
    WALLET_TOPUP = "WALLET_TOPUP",
    RIDE_PAYMENT = "RIDE_PAYMENT",
    SUBSCRIPTION = "SUBSCRIPTION",
    REFUND = "REFUND"
}
export declare enum TransactionType {
    TOPUP = "TOPUP",
    RIDE_PAYMENT = "RIDE_PAYMENT",
    REFUND = "REFUND"
}

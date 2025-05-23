export declare enum RequestType {
    NEW_ROUTE = "NEW_ROUTE",
    JOIN_EXISTING = "JOIN_EXISTING",
    TEMPORARY = "TEMPORARY",
    RECURRING = "RECURRING"
}
export declare enum RouteStatus {
    PENDING_TEEN = "PENDING_TEEN",
    PENDING_PARENT = "PENDING_PARENT",
    PENDING_DRIVER = "PENDING_DRIVER",
    PENDING_ADMIN = "PENDING_ADMIN",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum UserRole {
    PARENT = "PARENT",
    DRIVER = "DRIVER",
    TEEN = "TEEN",
    ADMIN = "ADMIN"
}
export declare enum LocationType {
    SCHOOL = "SCHOOL",
    BUSINESS = "BUSINESS",
    RESIDENTIAL = "RESIDENTIAL",
    BUS_STOP = "BUS_STOP",
    LANDMARK = "LANDMARK",
    OTHER = "OTHER"
}
export declare enum StopType {
    PICKUP = "PICKUP",
    DROP = "DROP"
}
export declare enum TripStatus {
    SCHEDULED = "SCHEDULED",
    DRIVER_ASSIGNED = "DRIVER_ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum RideStatus {
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    PICKUP_PENDING = "PICKUP_PENDING",
    PICKED_UP = "PICKED_UP",
    DROP_PENDING = "DROP_PENDING",
    DROPPED_OFF = "DROPPED_OFF",
    CANCELLED = "CANCELLED",
    NO_SHOW = "NO_SHOW"
}
export declare enum RouteType {
    ADMIN_CREATED = "ADMIN_CREATED",
    DRIVER_CREATED = "DRIVER_CREATED",
    PARENT_CREATED = "PARENT_CREATED",
    TEEN_REQUESTED = "TEEN_REQUESTED"
}
export declare enum RouteFrequency {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY"
}
export declare enum PricingType {
    FIXED = "FIXED",
    PER_KM = "PER_KM",
    ZONE_BASED = "ZONE_BASED"
}
export declare enum TransactionType {
    TOPUP = "TOPUP",
    RIDE_PAYMENT = "RIDE_PAYMENT",
    REFUND = "REFUND",
    REWARD = "REWARD"
}
export declare enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}
export declare enum BuddyStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    BLOCKED = "BLOCKED"
}
export declare enum InviteStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    EXPIRED = "EXPIRED",
    REJECTED = "REJECTED"
}
export declare enum InviteType {
    PARENT_TO_TEEN = "PARENT_TO_TEEN",
    TEEN_TO_PARENT = "TEEN_TO_PARENT"
}
export declare enum DocumentType {
    DRIVING_LICENSE = "DRIVING_LICENSE",
    AADHAR_CARD = "AADHAR_CARD",
    VEHICLE_RC = "VEHICLE_RC",
    INSURANCE = "INSURANCE",
    POLICE_VERIFICATION = "POLICE_VERIFICATION"
}
export declare enum VerificationStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}

export * from '../shared/types/enums';
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
export declare enum LocationCategory {
    PICKUP_POINT = "PICKUP_POINT",
    DROP_POINT = "DROP_POINT",
    BOTH = "BOTH"
}
export declare enum PaymentType {
    WALLET_TOPUP = "WALLET_TOPUP",
    RIDE_PAYMENT = "RIDE_PAYMENT",
    SUBSCRIPTION = "SUBSCRIPTION",
    REFUND = "REFUND"
}

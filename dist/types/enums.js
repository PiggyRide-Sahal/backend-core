"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.PaymentType = exports.PaymentStatus = exports.RideStatus = exports.TripStatus = exports.StopType = exports.RouteStatus = exports.RouteFrequency = exports.LocationCategory = exports.LocationType = exports.DeviceStatus = exports.DeviceType = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["PARENT"] = "PARENT";
    UserRole["DRIVER"] = "DRIVER";
    UserRole["TEEN"] = "TEEN";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole || (exports.UserRole = UserRole = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["GPS_TRACKER"] = "GPS_TRACKER";
    DeviceType["CAMERA"] = "CAMERA";
    DeviceType["PANIC_BUTTON"] = "PANIC_BUTTON";
    DeviceType["TEMPERATURE_SENSOR"] = "TEMPERATURE_SENSOR";
    DeviceType["FUEL_SENSOR"] = "FUEL_SENSOR";
    DeviceType["RFID_READER"] = "RFID_READER";
})(DeviceType || (exports.DeviceType = DeviceType = {}));
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["ACTIVE"] = "ACTIVE";
    DeviceStatus["INACTIVE"] = "INACTIVE";
    DeviceStatus["MAINTENANCE"] = "MAINTENANCE";
    DeviceStatus["MALFUNCTION"] = "MALFUNCTION";
})(DeviceStatus || (exports.DeviceStatus = DeviceStatus = {}));
var LocationType;
(function (LocationType) {
    LocationType["SCHOOL"] = "SCHOOL";
    LocationType["RESIDENTIAL"] = "RESIDENTIAL";
    LocationType["COMMERCIAL"] = "COMMERCIAL";
    LocationType["LANDMARK"] = "LANDMARK";
    LocationType["OTHER"] = "OTHER";
})(LocationType || (exports.LocationType = LocationType = {}));
var LocationCategory;
(function (LocationCategory) {
    LocationCategory["PICKUP_POINT"] = "PICKUP_POINT";
    LocationCategory["DROP_POINT"] = "DROP_POINT";
    LocationCategory["BOTH"] = "BOTH";
})(LocationCategory || (exports.LocationCategory = LocationCategory = {}));
var RouteFrequency;
(function (RouteFrequency) {
    RouteFrequency["DAILY"] = "DAILY";
    RouteFrequency["WEEKLY"] = "WEEKLY";
    RouteFrequency["MONTHLY"] = "MONTHLY";
})(RouteFrequency || (exports.RouteFrequency = RouteFrequency = {}));
var RouteStatus;
(function (RouteStatus) {
    RouteStatus["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    RouteStatus["ACTIVE"] = "ACTIVE";
    RouteStatus["INACTIVE"] = "INACTIVE";
    RouteStatus["COMPLETED"] = "COMPLETED";
    RouteStatus["CANCELLED"] = "CANCELLED";
})(RouteStatus || (exports.RouteStatus = RouteStatus = {}));
var StopType;
(function (StopType) {
    StopType["PICKUP"] = "PICKUP";
    StopType["DROP"] = "DROP";
})(StopType || (exports.StopType = StopType = {}));
var TripStatus;
(function (TripStatus) {
    TripStatus["NOT_STARTED"] = "NOT_STARTED";
    TripStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TripStatus["COMPLETED"] = "COMPLETED";
    TripStatus["CANCELLED"] = "CANCELLED";
})(TripStatus || (exports.TripStatus = TripStatus = {}));
var RideStatus;
(function (RideStatus) {
    RideStatus["REQUESTED"] = "REQUESTED";
    RideStatus["SCHEDULED"] = "SCHEDULED";
    RideStatus["ACCEPTED"] = "ACCEPTED";
    RideStatus["IN_PROGRESS"] = "IN_PROGRESS";
    RideStatus["COMPLETED"] = "COMPLETED";
    RideStatus["CANCELLED"] = "CANCELLED";
    RideStatus["NO_SHOW"] = "NO_SHOW";
})(RideStatus || (exports.RideStatus = RideStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["REFUNDED"] = "REFUNDED";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["WALLET_TOPUP"] = "WALLET_TOPUP";
    PaymentType["RIDE_PAYMENT"] = "RIDE_PAYMENT";
    PaymentType["SUBSCRIPTION"] = "SUBSCRIPTION";
    PaymentType["REFUND"] = "REFUND";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["TOPUP"] = "TOPUP";
    TransactionType["RIDE_PAYMENT"] = "RIDE_PAYMENT";
    TransactionType["REFUND"] = "REFUND";
})(TransactionType || (exports.TransactionType = TransactionType = {}));

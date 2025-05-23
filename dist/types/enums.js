"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = exports.LocationCategory = exports.DeviceStatus = exports.DeviceType = void 0;
__exportStar(require("../shared/types/enums"), exports);
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
var LocationCategory;
(function (LocationCategory) {
    LocationCategory["PICKUP_POINT"] = "PICKUP_POINT";
    LocationCategory["DROP_POINT"] = "DROP_POINT";
    LocationCategory["BOTH"] = "BOTH";
})(LocationCategory || (exports.LocationCategory = LocationCategory = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["WALLET_TOPUP"] = "WALLET_TOPUP";
    PaymentType["RIDE_PAYMENT"] = "RIDE_PAYMENT";
    PaymentType["SUBSCRIPTION"] = "SUBSCRIPTION";
    PaymentType["REFUND"] = "REFUND";
})(PaymentType || (exports.PaymentType = PaymentType = {}));

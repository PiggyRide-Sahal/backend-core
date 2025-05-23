"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationStatus = exports.DocumentType = exports.InviteType = exports.InviteStatus = exports.BuddyStatus = exports.PaymentStatus = exports.TransactionType = exports.PricingType = exports.RouteFrequency = exports.RouteType = exports.RideStatus = exports.TripStatus = exports.StopType = exports.LocationType = exports.UserRole = exports.RouteStatus = exports.RequestType = void 0;
var RequestType;
(function (RequestType) {
    RequestType["NEW_ROUTE"] = "NEW_ROUTE";
    RequestType["JOIN_EXISTING"] = "JOIN_EXISTING";
    RequestType["TEMPORARY"] = "TEMPORARY";
    RequestType["RECURRING"] = "RECURRING";
})(RequestType || (exports.RequestType = RequestType = {}));
var RouteStatus;
(function (RouteStatus) {
    RouteStatus["PENDING_TEEN"] = "PENDING_TEEN";
    RouteStatus["PENDING_PARENT"] = "PENDING_PARENT";
    RouteStatus["PENDING_DRIVER"] = "PENDING_DRIVER";
    RouteStatus["PENDING_ADMIN"] = "PENDING_ADMIN";
    RouteStatus["ACTIVE"] = "ACTIVE";
    RouteStatus["COMPLETED"] = "COMPLETED";
    RouteStatus["CANCELLED"] = "CANCELLED";
})(RouteStatus || (exports.RouteStatus = RouteStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["PARENT"] = "PARENT";
    UserRole["DRIVER"] = "DRIVER";
    UserRole["TEEN"] = "TEEN";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole || (exports.UserRole = UserRole = {}));
var LocationType;
(function (LocationType) {
    LocationType["SCHOOL"] = "SCHOOL";
    LocationType["BUSINESS"] = "BUSINESS";
    LocationType["RESIDENTIAL"] = "RESIDENTIAL";
    LocationType["BUS_STOP"] = "BUS_STOP";
    LocationType["LANDMARK"] = "LANDMARK";
    LocationType["OTHER"] = "OTHER";
})(LocationType || (exports.LocationType = LocationType = {}));
var StopType;
(function (StopType) {
    StopType["PICKUP"] = "PICKUP";
    StopType["DROP"] = "DROP";
})(StopType || (exports.StopType = StopType = {}));
var TripStatus;
(function (TripStatus) {
    TripStatus["SCHEDULED"] = "SCHEDULED";
    TripStatus["DRIVER_ASSIGNED"] = "DRIVER_ASSIGNED";
    TripStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TripStatus["COMPLETED"] = "COMPLETED";
    TripStatus["CANCELLED"] = "CANCELLED";
})(TripStatus || (exports.TripStatus = TripStatus = {}));
var RideStatus;
(function (RideStatus) {
    RideStatus["SCHEDULED"] = "SCHEDULED";
    RideStatus["IN_PROGRESS"] = "IN_PROGRESS";
    RideStatus["COMPLETED"] = "COMPLETED";
    RideStatus["PICKUP_PENDING"] = "PICKUP_PENDING";
    RideStatus["PICKED_UP"] = "PICKED_UP";
    RideStatus["DROP_PENDING"] = "DROP_PENDING";
    RideStatus["DROPPED_OFF"] = "DROPPED_OFF";
    RideStatus["CANCELLED"] = "CANCELLED";
    RideStatus["NO_SHOW"] = "NO_SHOW";
})(RideStatus || (exports.RideStatus = RideStatus = {}));
var RouteType;
(function (RouteType) {
    RouteType["ADMIN_CREATED"] = "ADMIN_CREATED";
    RouteType["DRIVER_CREATED"] = "DRIVER_CREATED";
    RouteType["PARENT_CREATED"] = "PARENT_CREATED";
    RouteType["TEEN_REQUESTED"] = "TEEN_REQUESTED";
})(RouteType || (exports.RouteType = RouteType = {}));
var RouteFrequency;
(function (RouteFrequency) {
    RouteFrequency["DAILY"] = "DAILY";
    RouteFrequency["WEEKLY"] = "WEEKLY";
    RouteFrequency["MONTHLY"] = "MONTHLY";
})(RouteFrequency || (exports.RouteFrequency = RouteFrequency = {}));
var PricingType;
(function (PricingType) {
    PricingType["FIXED"] = "FIXED";
    PricingType["PER_KM"] = "PER_KM";
    PricingType["ZONE_BASED"] = "ZONE_BASED";
})(PricingType || (exports.PricingType = PricingType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["TOPUP"] = "TOPUP";
    TransactionType["RIDE_PAYMENT"] = "RIDE_PAYMENT";
    TransactionType["REFUND"] = "REFUND";
    TransactionType["REWARD"] = "REWARD";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["REFUNDED"] = "REFUNDED";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var BuddyStatus;
(function (BuddyStatus) {
    BuddyStatus["PENDING"] = "PENDING";
    BuddyStatus["ACCEPTED"] = "ACCEPTED";
    BuddyStatus["BLOCKED"] = "BLOCKED";
})(BuddyStatus || (exports.BuddyStatus = BuddyStatus = {}));
var InviteStatus;
(function (InviteStatus) {
    InviteStatus["PENDING"] = "PENDING";
    InviteStatus["ACCEPTED"] = "ACCEPTED";
    InviteStatus["EXPIRED"] = "EXPIRED";
    InviteStatus["REJECTED"] = "REJECTED";
})(InviteStatus || (exports.InviteStatus = InviteStatus = {}));
var InviteType;
(function (InviteType) {
    InviteType["PARENT_TO_TEEN"] = "PARENT_TO_TEEN";
    InviteType["TEEN_TO_PARENT"] = "TEEN_TO_PARENT";
})(InviteType || (exports.InviteType = InviteType = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["DRIVING_LICENSE"] = "DRIVING_LICENSE";
    DocumentType["AADHAR_CARD"] = "AADHAR_CARD";
    DocumentType["VEHICLE_RC"] = "VEHICLE_RC";
    DocumentType["INSURANCE"] = "INSURANCE";
    DocumentType["POLICE_VERIFICATION"] = "POLICE_VERIFICATION";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["PENDING"] = "PENDING";
    VerificationStatus["APPROVED"] = "APPROVED";
    VerificationStatus["REJECTED"] = "REJECTED";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));

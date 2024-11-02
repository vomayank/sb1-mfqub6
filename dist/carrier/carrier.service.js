"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierService = void 0;
const common_1 = require("@nestjs/common");
let CarrierService = class CarrierService {
    constructor() {
        this.carriers = new Map();
    }
    registerCarrier(name, adapter) {
        this.carriers.set(name, adapter);
    }
    async createShipment(carrierName, shipmentDetails) {
        const carrier = this.carriers.get(carrierName);
        if (!carrier) {
            throw new Error(`Carrier ${carrierName} not found`);
        }
        return carrier.createShipment(shipmentDetails);
    }
    async trackShipment(carrierName, trackingNumber) {
        const carrier = this.carriers.get(carrierName);
        if (!carrier) {
            throw new Error(`Carrier ${carrierName} not found`);
        }
        return carrier.trackShipment(trackingNumber);
    }
};
exports.CarrierService = CarrierService;
exports.CarrierService = CarrierService = __decorate([
    (0, common_1.Injectable)()
], CarrierService);
//# sourceMappingURL=carrier.service.js.map
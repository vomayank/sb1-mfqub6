"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRateCalculator = void 0;
const common_1 = require("@nestjs/common");
let BaseRateCalculator = class BaseRateCalculator {
    constructor() {
        this.BASE_RATE = 50;
        this.WEIGHT_MULTIPLIER = 10;
        this.DISTANCE_MULTIPLIER = 5;
    }
    calculateRate(weight, distance) {
        const weightCharge = weight * this.WEIGHT_MULTIPLIER;
        const distanceCharge = distance * this.DISTANCE_MULTIPLIER;
        const totalRate = this.BASE_RATE + weightCharge + distanceCharge;
        return {
            totalRate,
            breakdown: {
                baseRate: this.BASE_RATE,
                weightCharge,
                distanceCharge,
            },
        };
    }
};
exports.BaseRateCalculator = BaseRateCalculator;
exports.BaseRateCalculator = BaseRateCalculator = __decorate([
    (0, common_1.Injectable)()
], BaseRateCalculator);
//# sourceMappingURL=base-rate.calculator.js.map
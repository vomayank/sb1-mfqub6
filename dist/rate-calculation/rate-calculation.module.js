"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateCalculationModule = void 0;
const common_1 = require("@nestjs/common");
const rate_calculation_service_1 = require("./rate-calculation.service");
const rate_calculation_controller_1 = require("./rate-calculation.controller");
const base_rate_calculator_1 = require("./calculators/base-rate.calculator");
let RateCalculationModule = class RateCalculationModule {
};
exports.RateCalculationModule = RateCalculationModule;
exports.RateCalculationModule = RateCalculationModule = __decorate([
    (0, common_1.Module)({
        providers: [rate_calculation_service_1.RateCalculationService, base_rate_calculator_1.BaseRateCalculator],
        controllers: [rate_calculation_controller_1.RateCalculationController],
        exports: [rate_calculation_service_1.RateCalculationService],
    })
], RateCalculationModule);
//# sourceMappingURL=rate-calculation.module.js.map
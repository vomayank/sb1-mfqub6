"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateCalculationController = void 0;
const common_1 = require("@nestjs/common");
const rate_calculation_service_1 = require("./rate-calculation.service");
const calculate_rate_dto_1 = require("./dto/calculate-rate.dto");
const swagger_1 = require("@nestjs/swagger");
let RateCalculationController = class RateCalculationController {
    constructor(rateCalculationService) {
        this.rateCalculationService = rateCalculationService;
    }
    calculateRate(calculateRateDto) {
        return this.rateCalculationService.calculateRate(calculateRateDto);
    }
};
exports.RateCalculationController = RateCalculationController;
__decorate([
    (0, common_1.Post)('calculate'),
    (0, swagger_1.ApiOperation)({ summary: 'Calculate shipping rate' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the calculated rate with breakdown.',
        schema: {
            type: 'object',
            properties: {
                totalRate: { type: 'number' },
                breakdown: {
                    type: 'object',
                    properties: {
                        baseRate: { type: 'number' },
                        weightCharge: { type: 'number' },
                        distanceCharge: { type: 'number' }
                    }
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calculate_rate_dto_1.CalculateRateDto]),
    __metadata("design:returntype", void 0)
], RateCalculationController.prototype, "calculateRate", null);
exports.RateCalculationController = RateCalculationController = __decorate([
    (0, swagger_1.ApiTags)('rates'),
    (0, common_1.Controller)('rates'),
    __metadata("design:paramtypes", [rate_calculation_service_1.RateCalculationService])
], RateCalculationController);
//# sourceMappingURL=rate-calculation.controller.js.map
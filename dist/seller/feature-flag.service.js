"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlagService = void 0;
const common_1 = require("@nestjs/common");
let FeatureFlagService = class FeatureFlagService {
    constructor() {
        this.featureFlags = new Map();
    }
    setFeatureFlag(sellerId, feature, enabled) {
        if (!this.featureFlags.has(sellerId)) {
            this.featureFlags.set(sellerId, new Map());
        }
        this.featureFlags.get(sellerId).set(feature, enabled);
    }
    isFeatureEnabled(sellerId, feature) {
        return this.featureFlags.get(sellerId)?.get(feature) || false;
    }
};
exports.FeatureFlagService = FeatureFlagService;
exports.FeatureFlagService = FeatureFlagService = __decorate([
    (0, common_1.Injectable)()
], FeatureFlagService);
//# sourceMappingURL=feature-flag.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailStrategy = void 0;
const common_1 = require("@nestjs/common");
let EmailStrategy = class EmailStrategy {
    async send(recipient, message) {
        console.log(`Sending email to ${recipient}: ${message}`);
    }
};
exports.EmailStrategy = EmailStrategy;
exports.EmailStrategy = EmailStrategy = __decorate([
    (0, common_1.Injectable)()
], EmailStrategy);
//# sourceMappingURL=email.strategy.js.map
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
exports.OffersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const create_offer_dto_1 = require("./dto/create-offer-dto");
const offers_service_1 = require("./offers.service");
let OffersController = class OffersController {
    constructor(offersService) {
        this.offersService = offersService;
    }
    create(dto, req) {
        return this.offersService.create(dto, req.user);
    }
    getAll() {
        return this.offersService.findMany();
    }
    getOne(id) {
        return this.offersService.findOne(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_offer_dto_1.CreateOfferDto, Object]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "getOne", null);
OffersController = __decorate([
    (0, common_1.Controller)('offers'),
    __metadata("design:paramtypes", [offers_service_1.OffersService])
], OffersController);
exports.OffersController = OffersController;
//# sourceMappingURL=offers.controller.js.map
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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const create_wish_dto_1 = require("./dto/create-wish.dto");
const update_wish_dto_1 = require("./dto/update-wish.dto");
const wishes_service_1 = require("./wishes.service");
let WishesController = class WishesController {
    constructor(wishesService) {
        this.wishesService = wishesService;
    }
    create(dto, req) {
        return this.wishesService.create(dto, req === null || req === void 0 ? void 0 : req.user);
    }
    getLast() {
        return this.wishesService.findByOrder({ created_at: 'DESC' }, 40);
    }
    getTop() {
        return this.wishesService.findByOrder({ copied: 'DESC' }, 20);
    }
    get(id) {
        return this.wishesService.findOne(id);
    }
    update(id, dto, req) {
        return this.wishesService.update(id, dto, req.user.id);
    }
    delete(id, req) {
        return this.wishesService.delete(id, req.user.id);
    }
    copy(id, req) {
        return this.wishesService.copy(id, req.user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wish_dto_1.CreateWishDto, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "getLast", null);
__decorate([
    (0, common_1.Get)('top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "getTop", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "get", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_wish_dto_1.UpdateWishDto, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Post)(':id/copy'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "copy", null);
WishesController = __decorate([
    (0, common_1.Controller)('wishes'),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
exports.WishesController = WishesController;
//# sourceMappingURL=wishes.controller.js.map
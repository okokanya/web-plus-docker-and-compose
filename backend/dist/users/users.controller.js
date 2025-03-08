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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const auth_guard_1 = require("../auth/auth.guard");
const wishes_service_1 = require("../wishes/wishes.service");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService, wishesService) {
        this.usersService = usersService;
        this.wishesService = wishesService;
    }
    async getMe(req) {
        const _a = await this.usersService.findOne('id', req.user.id), { password } = _a, rest = __rest(_a, ["password"]);
        return rest;
    }
    update(req, body) {
        return this.usersService.updateOne(req.user, body);
    }
    async getMeWishes(req) {
        const users = await this.usersService.findUsersWithWishes(req.user.id);
        const wishes = users.map((user) => user.wishes);
        return wishes[0];
    }
    getUser(username) {
        return this.usersService.findOne('username', username);
    }
    getUsersWishes(username) {
        return this.wishesService.findMany('owner', { username });
    }
    findUsers(query) {
        return this.usersService.findMany(query);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, decorators_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, decorators_1.Get)('me/wishes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMeWishes", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, decorators_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, decorators_1.Get)(':username/wishes'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsersWishes", null);
__decorate([
    (0, decorators_1.Post)('find'),
    __param(0, (0, decorators_1.Body)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUsers", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        wishes_service_1.WishesService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
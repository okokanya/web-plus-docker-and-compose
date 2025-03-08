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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const exceptions_1 = require("@nestjs/common/exceptions");
const bycrypt = require("bcrypt");
const app_errors_1 = require("../utils/app-errors");
let AuthService = class AuthService {
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async register(dto) {
        const existUserByName = await this.usersService.findOne('id', dto === null || dto === void 0 ? void 0 : dto.username);
        const existUserByEmail = await this.usersService.findOne('email', dto === null || dto === void 0 ? void 0 : dto.email);
        if (existUserByName || existUserByEmail) {
            throw new exceptions_1.BadRequestException(app_errors_1.appErrors.USER_EXIST);
        }
        return this.usersService.create(dto);
    }
    async login(username, password) {
        const existUser = await this.usersService.findOne('username', username);
        if (!existUser)
            throw new exceptions_1.BadRequestException(app_errors_1.appErrors.USER_NOT_FOUND);
        const validateUser = await bycrypt.compare(password, existUser.password);
        if (!validateUser)
            throw new exceptions_1.BadRequestException(app_errors_1.appErrors.WRONG_DATA);
        return existUser;
    }
    auth(userID) {
        const payload = { sub: userID };
        return { access_token: this.jwtService.sign(payload) };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
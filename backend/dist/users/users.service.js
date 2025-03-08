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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const bycrypt = require("bcrypt");
const app_errors_1 = require("../utils/app-errors");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async hashPassword(password) {
        return bycrypt.hash(password, 10);
    }
    async create(dto) {
        dto.password = await this.hashPassword(dto === null || dto === void 0 ? void 0 : dto.password);
        const user = await this.usersRepository.save(dto);
        return user;
    }
    async findOne(key, param) {
        const user = await this.usersRepository.findOneBy({ [key]: param });
        return user;
    }
    async updateOne(user, dto) {
        const { id } = user;
        const { email, username } = dto;
        if (dto.password) {
            dto.password = await this.hashPassword(dto.password);
        }
        const isExist = (await this.usersRepository.findOne({
            where: [{ email }, { username }],
        }))
            ? true
            : false;
        if (isExist) {
            throw new exceptions_1.ConflictException('Пользователь с таким email или username уже зарегистрирован');
        }
        try {
            await this.usersRepository.update(id, dto);
            const _a = await this.usersRepository.findOneBy({
                id,
            }), { password } = _a, updUser = __rest(_a, ["password"]);
            return updUser;
        }
        catch (_) {
            throw new exceptions_1.BadRequestException(app_errors_1.appErrors.WRONG_DATA);
        }
    }
    async findMany(query) {
        const searchResult = await this.usersRepository.find({
            where: [{ email: (0, typeorm_2.Like)(`%${query}%`) }, { username: (0, typeorm_2.Like)(`%${query}%`) }],
        });
        return searchResult;
    }
    async findUsersWithWishes(id) {
        const users = await this.usersRepository.find({
            relations: { wishes: true },
            where: { id },
        });
        return users;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
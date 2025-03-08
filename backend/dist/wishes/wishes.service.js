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
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_errors_1 = require("../utils/app-errors");
const typeorm_2 = require("typeorm");
const wishes_entity_1 = require("./entities/wishes.entity");
let WishesService = class WishesService {
    save(item) {
        throw new Error('Method not implemented.');
    }
    constructor(wishesRepository) {
        this.wishesRepository = wishesRepository;
    }
    async create(dto, owner) {
        return await this.wishesRepository.save(Object.assign(Object.assign({}, dto), { owner }));
    }
    async findOne(id) {
        return await this.wishesRepository.findOne({
            relations: { owner: true, offers: { user: true } },
            where: { id },
        });
    }
    async findByOrder(order, limit) {
        return await this.wishesRepository.find({
            relations: { owner: true },
            order: order,
            take: limit,
        });
    }
    async findMany(key, param) {
        return await this.wishesRepository.findBy({
            [key]: param,
        });
    }
    async findManyById(ids) {
        return await this.wishesRepository.findBy({
            id: (0, typeorm_2.In)(ids),
        });
    }
    async update(id, dto, userId) {
        var _a;
        const wish = await this.wishesRepository.findOne({
            relations: { owner: true, offers: true },
            where: { id },
        });
        if (dto.price && wish.raised > 0) {
            throw new common_1.ForbiddenException('Вы не можете изменять стоимость подарка');
        }
        if (((_a = wish === null || wish === void 0 ? void 0 : wish.owner) === null || _a === void 0 ? void 0 : _a.id) !== userId || wish.offers.length) {
            throw new common_1.BadRequestException(app_errors_1.appErrors.WRONG_DATA);
        }
        try {
            await this.wishesRepository.update(id, dto);
            return await this.wishesRepository.findBy({ id });
        }
        catch (_) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async delete(id, userId) {
        var _a;
        const wish = await this.wishesRepository.findOne({
            relations: { owner: true, offers: true },
            where: { id },
        });
        if (((_a = wish === null || wish === void 0 ? void 0 : wish.owner) === null || _a === void 0 ? void 0 : _a.id) !== userId || wish.offers.length) {
            throw new common_1.BadRequestException(app_errors_1.appErrors.WRONG_DATA);
        }
        return await this.wishesRepository.remove(wish);
    }
    async copy(id, user) {
        const wish = await this.wishesRepository.findOneBy({ id });
        const isAdded = (await this.wishesRepository.findOne({
            where: { owner: { id: user.id }, name: wish.name },
        }))
            ? true
            : false;
        if (isAdded)
            throw new common_1.ConflictException(app_errors_1.appErrors.WRONG_DATA);
        wish.owner = user;
        delete wish.id;
        return await this.wishesRepository.save(wish);
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishes_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map
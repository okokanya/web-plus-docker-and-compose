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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const app_errors_1 = require("../utils/app-errors");
const wishes_service_1 = require("../wishes/wishes.service");
const typeorm_2 = require("typeorm");
const wishlists_entity_1 = require("./entities/wishlists.entity");
let WishlistsService = class WishlistsService {
    constructor(wishlistsRepository, wishesService) {
        this.wishlistsRepository = wishlistsRepository;
        this.wishesService = wishesService;
    }
    async create(dto, owner) {
        const items = [];
        const { image, name } = dto;
        for (const itemId of dto.itemsId) {
            items.push(await this.wishesService.findOne(itemId));
        }
        return await this.wishlistsRepository.save({
            image,
            name,
            owner,
            items,
        });
    }
    async findAll() {
        return await this.wishlistsRepository.find({
            relations: { items: true },
        });
    }
    async findOne(id) {
        return await this.wishlistsRepository.findOne({
            relations: { items: true },
            where: { id },
        });
    }
    async updateOne(id, dto, user) {
        var _a;
        const wishlist = await this.wishlistsRepository.findOne({
            where: { id },
            relations: { owner: true, items: true },
        });
        let items;
        if (dto.itemsId) {
            items = await this.wishesService.findManyById(dto.itemsId);
        }
        if (user.id !== ((_a = wishlist === null || wishlist === void 0 ? void 0 : wishlist.owner) === null || _a === void 0 ? void 0 : _a.id)) {
            throw new exceptions_1.BadRequestException(app_errors_1.appErrors.WRONG_DATA);
        }
        await this.wishlistsRepository.save({
            id: wishlist.id,
            items: items ? items : wishlist.items,
            name: dto.name ? dto.name : wishlist === null || wishlist === void 0 ? void 0 : wishlist.name,
            image: dto.image ? dto.image : wishlist === null || wishlist === void 0 ? void 0 : wishlist.image,
            owner: wishlist.owner,
        });
        return await this.wishlistsRepository.findOne({
            where: { id },
            relations: { owner: true, items: true },
        });
    }
    async remove(id, user) {
        const wishlist = await this.wishlistsRepository.findOne({
            where: { id },
            relations: { owner: true },
        });
        if (user.id !== wishlist.owner.id) {
            throw new exceptions_1.BadRequestException(app_errors_1.appErrors.WRONG_DATA);
        }
        return await this.wishlistsRepository.remove(wishlist);
    }
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlists_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map
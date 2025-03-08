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
exports.Offer = void 0;
const users_entity_1 = require("../../users/entities/users.entity");
const wishes_entity_1 = require("../../wishes/entities/wishes.entity");
const typeorm_1 = require("typeorm");
let Offer = class Offer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Offer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Offer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Offer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.offers),
    __metadata("design:type", users_entity_1.User)
], Offer.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wishes_entity_1.Wish, (wish) => wish.offers),
    __metadata("design:type", wishes_entity_1.Wish)
], Offer.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', scale: 2 }),
    __metadata("design:type", Number)
], Offer.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Offer.prototype, "hidden", void 0);
Offer = __decorate([
    (0, typeorm_1.Entity)({ name: 'offer' })
], Offer);
exports.Offer = Offer;
//# sourceMappingURL=offers.entity.js.map
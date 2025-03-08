"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const users_module_1 = require("./users/users.module");
const wishes_module_1 = require("./wishes/wishes.module");
const offers_module_1 = require("./offers/offers.module");
const wishlists_module_1 = require("./wishlists/wishlists.module");
const users_entity_1 = require("./users/entities/users.entity");
const wishes_entity_1 = require("./wishes/entities/wishes.entity");
const offers_entity_1 = require("./offers/entities/offers.entity");
const wishlists_entity_1 = require("./wishlists/entities/wishlists.entity");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'student',
                password: 'student',
                database: 'kupipodariday',
                entities: [users_entity_1.User, wishes_entity_1.Wish, offers_entity_1.Offer, wishlists_entity_1.Wishlist],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            wishes_module_1.WishesModule,
            offers_module_1.OffersModule,
            wishlists_module_1.WishlistsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
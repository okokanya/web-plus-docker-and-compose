import { Offer } from 'src/offers/entities/offers.entity';
import { Wish } from 'src/wishes/entities/wishes.entity';
import { Wishlist } from 'src/wishlists/entities/wishlists.entity';
export declare class User {
    id: number;
    created_at: Date;
    updated_at: Date;
    username: string;
    about: string;
    avatar: string;
    email: string;
    password: string;
    wishes: Wish[];
    offers: Offer[];
    wishlists: Wishlist[];
}

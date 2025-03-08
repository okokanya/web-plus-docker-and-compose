import { User } from 'src/users/entities/users.entity';
import { Wish } from 'src/wishes/entities/wishes.entity';
export declare class Wishlist {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    owner: User;
    image: string;
    items: Wish[];
}

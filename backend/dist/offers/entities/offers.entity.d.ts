import { User } from 'src/users/entities/users.entity';
import { Wish } from 'src/wishes/entities/wishes.entity';
export declare class Offer {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    item: Wish;
    amount: number;
    hidden: boolean;
}

import { Wish } from 'src/wishes/entities/wishes.entity';
export declare class UpdateWishlistDto {
    name: string;
    image: string;
    itemsId: number[] | Wish[];
}

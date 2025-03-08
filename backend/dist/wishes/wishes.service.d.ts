import { User } from 'src/users/entities/users.entity';
import { FindOptionsOrder, Repository } from 'typeorm';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from './entities/wishes.entity';
export declare class WishesService {
    private wishesRepository;
    save(item: Wish): void;
    constructor(wishesRepository: Repository<Wish>);
    create(dto: CreateWishDto, owner: User): Promise<{
        owner: User;
        name: string;
        link: string;
        image: string;
        price: number;
    } & Wish>;
    findOne(id: number): Promise<Wish>;
    findByOrder(order: FindOptionsOrder<Wish>, limit: number): Promise<Wish[]>;
    findMany(key: string, param: any): Promise<Wish[]>;
    findManyById(ids: number[]): Promise<Wish[]>;
    update(id: number, dto: UpdateWishDto, userId: number): Promise<Wish[]>;
    delete(id: number, userId: number): Promise<Wish>;
    copy(id: number, user: User): Promise<Wish>;
}

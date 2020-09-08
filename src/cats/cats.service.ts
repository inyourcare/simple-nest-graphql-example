import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly CatsRepository: Repository<Cat>,
    ) { }

    create(createCatDto: CreateCatDto): Promise<Cat> {
        const cat = new Cat();
        cat.name = createCatDto.name;
        cat.age = createCatDto.age;

        return this.CatsRepository.save(cat);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { NewCatInput } from './dto/new-cat.input';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly CatsRepository: Repository<Cat>,
    ) { }

    create(createCatDto: NewCatInput): Promise<Cat> {
        const cat = new Cat();
        cat.name = createCatDto.name;
        cat.age = createCatDto.age;

        return this.CatsRepository.save(cat) as any;
    }
}

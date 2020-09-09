import { Controller, Post, Body } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { NewCatInput } from './dto/new-cat.input'

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() createCatDto: NewCatInput): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }
}

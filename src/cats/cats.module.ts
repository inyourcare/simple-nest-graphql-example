import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsResolver } from './cats.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    providers: [CatsService, CatsResolver],
    controllers: [CatsController],
})
export class CatsModule { }

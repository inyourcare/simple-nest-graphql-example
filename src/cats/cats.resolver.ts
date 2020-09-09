import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { PubSub } from 'apollo-server-express';
import { NewCatInput } from './dto/new-cat.input';
import { NewCatOutput } from './dto/new-cat.output';

const pubSub = new PubSub();

@Resolver()
export class CatsResolver {
    constructor(private readonly catsService: CatsService) { }

    @Mutation(returns => NewCatOutput)
    async addCat(
        @Args('newCatData') newCatInput: NewCatInput,
    ): Promise<NewCatOutput> {
        const cat = await this.catsService.create(newCatInput);
        pubSub.publish('catAdded', { catAdded: cat });
        const outputCat = new NewCatOutput();
        outputCat.age = cat.age;
        outputCat.name = cat.name;
        return outputCat;
    }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}

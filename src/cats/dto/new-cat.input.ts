import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewCatInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field(type => Number)
  age: number;
}

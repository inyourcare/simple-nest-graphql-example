import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@ObjectType()
export class NewCatOutput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field(type => Number)
  age: number;
}

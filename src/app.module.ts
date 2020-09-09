import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
  ],
})
export class AppModule {}

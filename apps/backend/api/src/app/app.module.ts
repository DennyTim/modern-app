import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {environment} from "../environments/environment";
import {GraphQLModule} from "@nestjs/graphql";
import {AppResolver} from "./app.resolver";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      ...environment.connection,
      autoLoadEntities: true
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: (({req}) => ({req})),
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {
}

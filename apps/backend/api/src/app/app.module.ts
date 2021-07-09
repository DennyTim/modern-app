import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {TypeOrmModule} from "@nestjs/typeorm";

import {AppController} from './app.controller';
import {environment} from "../environments/environment";
import {resolverMap} from "./app.resolver";
import {UsersModule} from "./users/users.module";
import {AuthModule} from './auth/auth.module';

/**
 * Root module backend-api app
 */
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      ...environment.connection,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: (({req}) => ({req})),
      playground: true,
      resolvers: [resolverMap],
    }),
    AuthModule,
  ],
  controllers: [AppController]
})
export class AppModule {
}

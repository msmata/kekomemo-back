import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import configuration from './common/configuration';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    FoodModule,
    MongooseModule.forRoot(process.env.DB_URL)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    FoodModule,
    MongooseModule.forRoot('mongodb://localhost:27017/kekomemo')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

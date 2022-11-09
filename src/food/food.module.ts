import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { Food, FoodSchema } from './entities/food.entity';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [
    MongooseModule.forFeature([
      {name: Food.name, schema: FoodSchema}
    ])
  ]
})
export class FoodModule {}

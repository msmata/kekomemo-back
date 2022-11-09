import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {

  private foods: Food[] = [
    {id: "1", name: 'Guiso de lentejas', image: ''},
    {id: "2", name: 'Milanesas', image: ''},
    {id: "3", name: 'Pizza', image: ''},
  ];

  create(createFoodDto: CreateFoodDto) {
    this.foods.push({...createFoodDto, id: randomUUID()});
  }

  findAll() {
    return this.foods;
  }

  findOne(id: string) {
    const searchedFood = this.foods.find(food => food.id === id);

    if (!searchedFood) {
      throw new NotFoundException(`Food with id ${id} not found`);
    }

    return searchedFood;
  }

  update(id: string, updateFoodDto: UpdateFoodDto) {
    const food = this.findOne(id);

    food.name = updateFoodDto.name;
    food.image = updateFoodDto.image;

    return food;
  }

  remove(id: string) {
    this.findOne(id);

    this.foods = this.foods.filter(f => f.id !== id);
  }
}

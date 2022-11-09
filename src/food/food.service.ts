import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {

  constructor(
    @InjectModel(Food.name)
    private readonly foodModel: Model<Food>
  ){}

  async create(createFoodDto: CreateFoodDto) {
    try {
      await this.foodModel.create({...createFoodDto});
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`Food with name ${createFoodDto.name} already exists`);
      }

      throw new InternalServerErrorException(`Check Logs`);
    }
  }

  async findAll() {
    return await this.foodModel.find({});
  }

  async findOne(id: string) {
    const searchedFood = await this.foodModel.findById(id);

    if (!searchedFood) {
      throw new NotFoundException(`Food with id ${id} not found`);
    }

    return searchedFood;
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    await this.foodModel.findOneAndUpdate({_id: id}, {...updateFoodDto});
  }

  async remove(id: string) {
    try {
      await this.foodModel.findOneAndDelete({_id: id});
    } catch (error) {
      console.log(error);
    }
  }
}

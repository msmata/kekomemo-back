import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectId } from 'mongodb'

@Injectable()
export class ValidateMongoId implements PipeTransform<string> {
  transform(value: string, _metadata: ArgumentMetadata) {
      if(!ObjectId.isValid(value)){
          throw new BadRequestException(`${value} is not a valid ObjectId`);
      }
  };
}
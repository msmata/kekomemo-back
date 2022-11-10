import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateFoodDto {
    @IsString({message: 'Debe ingresar un nombre válido'})
    @MinLength(3, {message: 'El nombre debe contener al menos 3 caracteres'})
    name: string;
    @IsString()
    @IsOptional()
    image?: string;
    @IsString()
    @IsOptional()
    description?: string;
}

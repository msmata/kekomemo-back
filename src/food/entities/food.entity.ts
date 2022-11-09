import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Food extends Document {
    @Prop({
        unique: true,
        index: true
    })
    name: string;
    @Prop()
    image: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
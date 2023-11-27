import { IsNumber, IsString } from "class-validator";

export class CreateSoupDto{
    @IsString()
    name: string;
    @IsNumber()
    price: number;
}
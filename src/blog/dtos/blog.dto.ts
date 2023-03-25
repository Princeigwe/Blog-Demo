import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class BlogDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    title: string


    @IsNotEmpty()
    @IsString()
    story: string
}
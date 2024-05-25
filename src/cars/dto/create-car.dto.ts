// Un DTO (Data Transfer Object) en NestJS es un objeto que se utiliza para encapsular y transferir datos entre diferentes capas de la aplicación, especialmente entre la capa de cliente y servidor. Su principal función es estructurar los datos de entrada o salida de las APIs, asegurando que los datos se manejen de manera segura y eficiente.

import { IsString, MinLength } from "class-validator";

export class CreateCarDto{
    
    @IsString({message: `The brand must be a string`})
    readonly brand: string;
    @IsString()
    @MinLength(3)
    readonly model: string;
}




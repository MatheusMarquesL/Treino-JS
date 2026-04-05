import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Campo preco deve ser numérico' })
  @IsNotEmpty({ message: 'Campo preco não pode ser vazio' })
  preco!: number;
}
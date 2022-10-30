import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;
}
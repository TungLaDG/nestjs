import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../../dtos';

export class GetCustomersDto extends PaginationDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  phone_number?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name?: string;
}

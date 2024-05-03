import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class DefectCreateDto {
  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  descrtiption: string

  @IsString()
  productId: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class DefectUpdateDto {
  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  descrtiption: string

  @IsString()
  productId: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

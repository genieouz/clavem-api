import { IsOptional, Min } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';
import { AnyObject } from '~/commons/typings/typescript';
import { Any } from '../scalars/any.scalar';
import { OrderByInput } from '~/commons/graphql/types-and-inputs/order-by.input';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ClientFilterInput {
  @ApiPropertyOptional()
  @Min(0)
  public offset?: number;

  @ApiPropertyOptional()
  @Min(1)
  public limit?: number;

  @ApiPropertyOptional()
  public filter?: AnyObject;

  @ApiPropertyOptional()
  public search?: string;

  @ApiPropertyOptional({ type: OrderByInput })
  public orderBy?: OrderByInput;
}

import { Field, InputType } from 'type-graphql';
import { OrderByDirection } from '~/commons/graphql/types-and-inputs/order-by-direction';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class OrderByInput {
  @ApiProperty()
  public property: string;

  @ApiProperty({ type: OrderByDirection })
  public direction?: OrderByDirection | number;
}

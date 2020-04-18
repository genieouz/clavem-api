import { IsOptional, Min } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';
import { AnyObject } from '~/commons/typings/typescript';
import { Any } from '../scalars/any.scalar';
import { OrderByInput } from '~/commons/graphql/types-and-inputs/order-by.input';

export class ClientFilterInput {
  @Min(0)
  public offset?: number;

  @Min(1)
  public limit?: number;

  public filter?: AnyObject;

  public search?: string;

  public orderBy?: OrderByInput;
}

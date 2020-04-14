import { IUser } from '~/user/interfaces/user.interface';

export interface IStartRegistration {
  user: IUser;
  validationCode: string;
  validationToken?: string;
}
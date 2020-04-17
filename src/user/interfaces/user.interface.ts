import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user.roles';
export interface IUser extends Document {
  _id: string;
  countryCode: string;
  role: UserRoles;
  gender?: UserGender;
  birthDate?: Date;
  phoneNumber: string;
  lastName: string;
  firstName: string;
  password: string;
  email: string;
}
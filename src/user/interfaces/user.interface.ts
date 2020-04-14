import { UserGender } from '~/user/types/user-gender';
import { UserRoles } from '~/user/types/user.roles';
export interface IUser extends Document {
  _id: string;
  phone: number;
  countryCode: number;
  role: UserRoles;
  fullName: string;
  gender?: UserGender;
  birthDate?: Date;
  phoneNumber: string;
  lastName: string;
  firstName: string;
  password: string;
  email: string;
}
import { UserGender } from '~/user/types/user-gender';
import { UserRoles } from '~/user/types/user.roles';
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  phoneNumber: {
    type: Number,
    required: true,
  },
  countryCode: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: UserGender,
  },
  birthDate: {
    type: Date,
  },
  role: {
    type: String,
    default: UserRoles.ORGANIZER,
  },

});

import { UserGender } from '~/user/enums/user-gender';
import { UserRoles } from '~/user/enums/user-roles.enum';
import { Schema } from 'mongoose';
import { imageSizesNestedObject } from '~/commons/database/field-types/image-size-refs-hash.type';

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
  avatar: imageSizesNestedObject,

}, { timestamps: true });

import { UserGender } from '~/user/types/user-gender';

export interface ICompleteRegistration {
    fullName: string;
    birthDate: Date;
    gender: UserGender;
}
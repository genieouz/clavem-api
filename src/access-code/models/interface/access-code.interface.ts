import { Document } from 'mongoose';
import { AccessCodeRole } from '~/access-code/enums/access-code-role';

export interface IAccessCode extends Document {
    _id: string;
    organizer: string;
    username: string;
    password: string;
    role: AccessCodeRole;
}
import { Schema } from "mongoose";
import { AccessCodeRole } from "~/access-code/enums/access-code-role";
import { userModelName } from "~/user/user.model-name";

export const AccessCodeSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: Object.keys(AccessCodeRole),
        default: AccessCodeRole.ADMIN,
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: true,
    }

}, { timestamps: true });

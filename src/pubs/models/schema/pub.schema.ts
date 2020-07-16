import { Schema } from 'mongoose';
import { attachmentModelName } from '~/attachment/attachment.namings';
import { userModelName } from '~/user/user.model-name';

export const PubSchema = new Schema({
    attachment: {
        type: Schema.Types.ObjectId,
        ref: attachmentModelName,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    object: {
        type: String,
    },
    dependence: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isUp: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        required: true
    },

}, { timestamps: true });

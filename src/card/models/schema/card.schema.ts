import { Schema } from 'mongoose';
import { CardState } from '~/card/enums/card-state';
import { userModelName } from '~/user/user.model-name';
import { cardModelName } from '../card.model-name';

export const CardSchema = new Schema({
    number: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: true,
    },
    state: {
        type: String,
        enum: Object.keys(CardState),
        default: CardState.ACTIVATED,
    },
    emergencyOf: {
        type: [Schema.Types.ObjectId],
        ref: cardModelName,
        default: []
    },
}, { timestamps: true });

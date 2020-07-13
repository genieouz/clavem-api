import { Schema } from 'mongoose';
import { cardModelName } from '~/card/models/card.model-name';
import { ReservationState } from '~/reservations/enums/reservation-state';
import { userModelName } from '~/user/user.model-name';

export const ReservationSchema = new Schema({
    card: {
        type: Schema.Types.ObjectId,
        ref: cardModelName,
        required: true,
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: true,
    },
    state: {
        type: String,
        enum: Object.keys(ReservationState),
        default: ReservationState.PENDING,
    },
    ticket: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true });

import { Schema } from 'mongoose';
import { ImageSizes } from '~/commons/graphql/types-and-inputs/image-sizes.type';
import { imageSizesNestedObject } from '~/commons/database/field-types/image-size-refs-hash.type';
import { userModelName } from '~/user/user.model-name';
import { categoryModelName } from '~/category/category.model-name';
import { EventType } from '~/event/enums/event-type.enum';
import { EventAccessType } from '~/event/enums/event-access-type.enum';
import { TicketSchema } from '~/event/models/schemas/ticket.schema';
import { EventStatus } from '~/event/enums/event-status.enum';

export const EventSchema = new Schema({
    description: {
        type: String
    },
    address: {
        type: String
    },
    locationAccuracy: {
        type: String,
    },
    status: {
        type: String,
        enum: Object.keys(EventStatus),
        default: EventStatus.Actived,
    },
    type: {
        type: String,
        enum: Object.keys(EventType),
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    catchyPhrase: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: categoryModelName,
        required: true,
    },
    poster: imageSizesNestedObject,
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    expectedNumberOfPersons: {
        type: Number,
        required: true,
    },
    accessType: {
        type: String,
        enum: Object.keys(EventAccessType),
        required: true,
    },
    keepContactWithParticipant: {
        type: Boolean,
        required: true,
    },
    paidEntrance: {
        type: Boolean,
        required: true
    },
    priceIncludingCharges: {
        type: Boolean,
        required: true
    },
    categoryCriteria: {
        type: [String],
    },
    purchasedTicketInvolveFreeTicket: {
        type: {
            purchasedTickets: {
                type: Number,
            },
            offeredTickets: {
                type: Number,
            }
        }
    },
    tikets: {
        type: [TicketSchema],
        default: []
    },
    reservation: {
        type: {
            allowed: { type: Boolean },
            payWhenReservation: { type: Boolean },
            reservationFeeRefundable: { type: Boolean },
            percentageToPay: { type: Number },
            limiteDateConfirmation: { type: Date }
        }
    }
});
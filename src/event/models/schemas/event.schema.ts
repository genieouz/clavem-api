import { Schema } from 'mongoose';
import { ImageSizes } from '~/commons/graphql/types-and-inputs/image-sizes.type';
import { imageSizesNestedObject } from '~/commons/database/field-types/image-size-refs-hash.type';
import { userModelName } from '~/user/user.model-name';
import { categoryModelName } from '~/category/category.model-name';
import { EventType } from '~/event/enums/event-type.enum';
import { EventAccessType } from '~/event/enums/event-access-type.enum';
import { TicketSchema } from '~/event/models/schemas/ticket.schema';
import { EventStatus } from '~/event/enums/event-status.enum';
import { attachmentRecordSchema } from '~/attachment/models/schemas/attachment-record.schema';

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
        default: EventStatus.Desactivated,
    },
    type: {
        type: String,
        enum: Object.keys(EventType),
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    catchyPhrase: {
        type: String,
        required: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: userModelName,
        required: false,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: categoryModelName,
        required: false,
    },
    poster: imageSizesNestedObject,
    startDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    expectedNumberOfPersons: {
        type: Number,
        required: false,
    },
    accessType: {
        type: String,
        enum: Object.keys(EventAccessType),
        required: false,
    },
    keepContactWithParticipant: {
        type: Boolean,
        required: false,
    },
    paidEntrance: {
        type: Boolean,
        required: false
    },
    priceIncludingCharges: {
        type: Boolean,
        required: false
    },
    categoryCriteria: {
        type: [String],
    },
    offerOnTicketsPurchases: {
        type: {
            purchasedTicketInvolveFreeTicket: {
                type: Boolean,
            },
            purchasedTickets: {
                type: {
                    quantity: Number,
                    categoryCriteria: String
                },
            },
            offeredTickets: {
                type: {
                    quantity: Number,
                    categoryCriteria: String
                },
            }
        }
    },
    tickets: {
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
    },
    archives: {
        type: [attachmentRecordSchema]
    }
});
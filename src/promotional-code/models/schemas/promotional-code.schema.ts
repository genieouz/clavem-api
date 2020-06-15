import { Schema } from 'mongoose';
import { PromotionalCodeImpact } from '~/promotional-code/enums/promotional-code-impact.enum';

export const PromotionalCodeSchema = new Schema({
    eventId: {
        type: String,
        required: true,
    },
    impact: {
        type: String,
        enum: Object.keys(PromotionalCodeImpact),
    },
    privateName: {
        type: String,
    },
    numberOfGeneratedCodes: {
        type: Number,
    },
    tickets: [{
        type: Schema.Types.ObjectId,
        required: false,
        default: [],
    }],
    reductionEffect: {
        reduction: { type: String },
        inPercentage: { type: Boolean },
    },
    publicName: {
        type: String,
    },
    usableNumberOfTimes: {
        type: Number,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },

}, { timestamps: true });

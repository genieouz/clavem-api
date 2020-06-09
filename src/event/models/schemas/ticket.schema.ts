import { Schema } from 'mongoose';
export const TicketSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categoryCriteria: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    }
});
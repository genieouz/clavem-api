import { Schema } from 'mongoose';
import { ImageSizes } from '~/commons/graphql/types-and-inputs/image-sizes.type';
import { imageSizesNestedObject } from '~/commons/database/field-types/image-size-refs-hash.type';

export const EventSchema = new Schema({
    _id: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    date: {
        type: Date
    },
    statut: {
        type: String
    },
    poster: imageSizesNestedObject,
});
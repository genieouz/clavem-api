import { ImageSizes } from "~/commons/graphql/types-and-inputs/image-sizes.type";

export interface IEvent {
    _id: string;
    description: string;
    address: string;
    date: Date;
    statut: string;
    poster: ImageSizes;
}
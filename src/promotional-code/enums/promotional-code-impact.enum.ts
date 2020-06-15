import { registerEnumType } from 'type-graphql';

export enum PromotionalCodeImpact {
    MASK_TICKETS = 'MASK_TICKETS',
    APPLY_REDUCTION = 'APPLY_REDUCTION',
}

registerEnumType(PromotionalCodeImpact, {
    name: 'PromotionalCodeImpact',
});
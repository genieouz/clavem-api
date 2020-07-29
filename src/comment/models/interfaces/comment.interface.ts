export interface IComment {
    id: string;
    message: string;
    sender: string;
    destinataire: string;
    event: string;
    createdAt: Date;
}
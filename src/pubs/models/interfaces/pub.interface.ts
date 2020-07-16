export interface IPub {
    _id: string;
    title: string;
    object: string;
    startDate: Date;
    endDate: Date;
    isUp: boolean;
    dependence: string;
    attachment: string;
    order: number;
    createdAt: Date;
}
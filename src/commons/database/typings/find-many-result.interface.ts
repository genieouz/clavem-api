export interface IFindManyResult<T> {
    recordsLength: number;
    totalRecords: number;
    records: T[];
    offset: number;
    limit: number;
    pages: number;
    currentPage: number;
}
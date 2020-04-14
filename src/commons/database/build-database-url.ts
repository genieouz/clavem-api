import { MONGO_URL, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME } from '~/commons/config/env';

export function buildDatabaseUrl(): string {
    if(MONGO_URL === undefined) {
        return `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;
    }
    return MONGO_URL;
}
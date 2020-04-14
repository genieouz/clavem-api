import { MONGODB_URL, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME } from '~/commons/config/env';

export function buildDatabaseUrl(): string {
    if (MONGODB_URL === undefined) {
        return `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;
    }
    return MONGODB_URL;
}
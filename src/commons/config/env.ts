import * as dotenv from 'dotenv';

dotenv.config();

export const MONGO_HOST = process.env.MONGO_HOST,
    MONGO_DB_NAME = process.env.MONGO_DB_NAME,
    MONGO_PORT = process.env.MONGO_PORT,
    MONGO_URL = process.env.MONGO_URL,
    TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN,
    TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID,
    TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER,
    TOKEN_SECRET = process.env.TOKEN_SECRET,
    API_PORT = 3000;
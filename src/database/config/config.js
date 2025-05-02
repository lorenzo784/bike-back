import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
if(!process.env.NODE_ENV){
    dotenv.config({
        path: '../../.env'
    });
}

export default {
    development: {
        url: process.env.DB_URL || '',
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '',
        port: process.env.DB_PORT || '',
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
        dialectOptions: {
            ssl: false,
        },
        pool: {
            max: Number(process.env.DB_MAX_CONNECTIONS) || 1,
            min: 1,
            acquire: 30000,
            idle: 10000,
        },
        migrationStorage: "sequelize",
        seederStorage: "sequelize",
    },
    test: {
        url: process.env.DB_URL || '',
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '',
        port: process.env.DB_PORT || '',
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
        dialectOptions: {
            ssl: false,
        },
        pool: {
            max: Number(process.env.DB_MAX_CONNECTIONS) || 1,
            min: 1,
            acquire: 30000,
            idle: 10000,
        },
        migrationStorage: "sequelize",
        seederStorage: "sequelize",
    },
    production: {
        url: process.env.DB_URL || '',
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '',
        port: process.env.DB_PORT || '',
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
        dialectOptions: {
            ssl: true,
        },
        pool: {
            max: Number(process.env.DB_MAX_CONNECTIONS) || 1,
            min: 1,
            acquire: 30000,
            idle: 10000,
        },
        migrationStorage: "sequelize",
        seederStorage: "sequelize",
    }
}
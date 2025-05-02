import { Sequelize } from "sequelize";
import database from './config/config.js';
import { initUser } from "./models/index.js";
const env = process.env.NODE_ENV || 'development';
const config = database[env];

const sequelize = new Sequelize(config.url ? config.url : config.database, config.username, config.password, {
    ...config
});

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

const User = initUser(sequelize);

const db = { User };

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//export default db;
export { sequelize, Sequelize, User };
import {Sequelize} from "sequelize";

const db = new Sequelize ("mylibrary_db","root","",{
    host: "localhost",
    dialect : "mysql"
});

export default db;
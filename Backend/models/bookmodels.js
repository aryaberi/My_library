import {Sequelize} from "sequelize";
import db from"../config/database.js";

const {DataTypes} = Sequelize;

const Book = db.define('books',{
    image : DataTypes.STRING,
    judul : DataTypes.STRING,
    penulis : DataTypes.STRING,
    genre : DataTypes.STRING,
    tahun : DataTypes.STRING,
    sinopsis : DataTypes.STRING,

},{
    freezeTableName:true
});

export default Book;

(async()=>{
    await db.sync();
})();
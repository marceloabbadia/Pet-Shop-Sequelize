import Sequelize from "sequelize"
import db from "../repositories/db.js"


const Proprietarios = db.define("proprietarios", {
    proprietarioId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,

    }
}, { underscored: true })


export default Proprietarios
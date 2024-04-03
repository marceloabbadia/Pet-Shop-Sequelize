import Sequelize from "sequelize"
import db from "../repositories/db.js"
import Proprietarios from "./proprietarios.model.js"

const Animais = db.define("animais", {
    animalId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,

    },

}, { underscored: true })

Animais.belongsTo(Proprietarios, { foreignKey: "proprietarioId" })


export default Animais
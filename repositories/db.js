import Sequelize from "sequelize"

const sequelize = new Sequelize(
    "postgres://coaikloa:o20FsuMsgHyDzWPK732lUluezN0zvfXr@isabelle.db.elephantsql.com/coaikloa",
    {
        dialect: "postgres",
        define: {
            timestamps: false

        }
    }
)

export default sequelize
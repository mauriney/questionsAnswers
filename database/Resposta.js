const Sequelize = require("sequelize")
const connection = require("./database")

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: { //vincula o id a quem respondeu (relacionamento cru), não é a forma ideal de realizar a conexão entre as tabelas
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


Resposta.sync({force: false})

module.exports = Resposta
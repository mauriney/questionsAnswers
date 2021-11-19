const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define('perguntas',{//definindo o nome da tabela
    titulo:{//definindo informações das colunas
        type: Sequelize.STRING,
        allowNull: false//não recebe valores null
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {//sincroniza Pergunta com o banco de dados | force: false evita que a tabela seja recriada se já existir
    console.log('tabela criada')
});
const Sequelize = require('sequelize')

const connection = new Sequelize('questions-answers','root','',{//nome do banco / usuario / senha
    host: 'localhost', //onde está rodando
    dialect: 'mysql' //qual tipo de banco
});

module.exports = connection;
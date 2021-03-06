<h1 align="center">:file_cabinet: Questions and Answeers</h1>

## :memo: Descrição
Projeto de duração média de 4h de desenvolvimento. Inpirado no ask.fm. (Sim, aquele site famoso de perguntas e respostas que infelizmente entrou em desuso com o passar dos anos).

## :books: Funcionalidades
* **Formulário de pergunta;**
* **Cadastro de  perguntas;**
* **Listagem de perguntas cadastradas;**
* **Formulário de respostas;**
* **Listagem de todas as respostas no formulario de perguntas**

## :wrench: Tecnologias utilizadas
* [Javascript](https://www.javascript.com/);
* [Node.js](https://nodejs.org/en/);
* [Express](https://expressjs.com/);
* [EJS](https://ejs.co/);
* [MySQL](https://www.mysql.com/);
* [Sequelize](https://sequelize.org/);
* [Bootstrap](https://getbootstrap.com);

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, ter node.js instalado na máquina, e dar os seguintes comandos para iniciar o projeto:

Instalar  e iniciar NPM
```
npm install
```
```
npm init -y
```

Executa o SQL para criar o banco de dados. 
(database/db_2021-11-25_questions_answers.sql)

* Observação: Se estiver usando uma versão mysql superior a 8.0 deverá fazer o seguinte procedimento após a criação do banco de dados para corrigir o erro de conexão do Sequelize.
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SUASENHA'
```


## :soon: Implementação futura
* Página de login;
* Status de cada pergunta;
* Melhorias no front;

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/mauriney">
        <img src="https://avatars.githubusercontent.com/u/11819977?v=4" width="100px;" alt="Foto de Mauriney no GitHub"/><br>
        <sub>
          <b>Mauriney Costa</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
* **Primeira etapa:  Finalizada;** 
* **Segunda etapa: Em andamento;**

## Creditos
* Projeto desenvolvido com base nos estudos aplicados do curso guia do programador.
* Readme inspirado no modelo disponibilizado no github da <a href="https://github.com/tatialveso"><b>Tati</b></a>

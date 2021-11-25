const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")

//Database conexão
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
})


//Informando ao Express que deve utilizar EJS como View Engine
app.set('view engine', 'ejs')
app.use(express.static('public'));//informand que vai utilizar arquivos estaticos CSS, imagens... da pasta public

//Body parser
app.use(bodyParser.urlencoded({extended: false}))//permite com que a pessoa envie os dados do formulario para uma estrutura JS (Decodificar os dados do formulario)
app.use(bodyParser.json())


//Rotas
app.get("/",(req,res) => {
    Pergunta.findAll({ raw:true, order:[
        ['id', 'DESC']//ordenando por ordem decrescente usando o ID
    ]}).then(perguntas => {//rotas de perguntas | recebendo um array de perguntas
        res.render("index", {
            perguntas:perguntas
        })
    })
});

app.get("/perguntar",(req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {//rotas de formularios  requer o tipo post || a rota já está no form do perguntar
    let titulo = req.body.titulo; //recebe o titulo do name do formulario perguntar e passa pra variavel titulo
    let descricao = req.body.descricao;
    Pergunta.create({ //create é responsavel por criar a pergunta é o equivalente ao INSERT ...
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")//redirecionando para home após perguntar
    })
})

app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id;
    Pergunta.findOne({//findOne método que busca um dado no banco de dados
        where: {id: id}//busca pelo json id igual o valor colocado no parametro id
    }).then(pergunta => {// quando a busca for concluida passa a pergunta
        if(pergunta != undefined){// pergunta encontrada
            res.render("pergunta")
        }else {// não encontrada
            res.redirect("/")
        }
    });
});

app.listen(8080,()=>{console.log("App rodando!")})
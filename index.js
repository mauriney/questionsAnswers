const express = require("express")
const app = express()

//Informando ao Express que deve utilizar EJS como View Engine
app.set('view engine', 'ejs')
app.use(express.static('public'));//informand que vai utilizar arquivos estaticos CSS, imagens... da pasta public

app.get("/",(req,res) => {
    res.render('index')//pega automaticamente na pasta views
});

app.get("/perguntar",(req, res) => {
    res.render("perguntar")
})
app.listen(8080,()=>{console.log("App rodando!")})
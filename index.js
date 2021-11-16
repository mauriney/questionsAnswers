const express = require("express")
const app = express()

//Informando ao Express que deve utilizar EJS como View Engine
app.set('view engine', 'ejs')

app.get("/",(req,res) => {
    res.render('index')//pega automaticamente na pasta views
});

app.listen(8080,()=>{console.log("App rodando!")})
/***********************************************************************************************
 * Objetivo: API responsavel por fornercer dados de filme
 * Data: 07/10/2025
 * Autor: Vinicius Julio
 * Versão: 1.0
 * 
 * Observações: instalar dependencias para criar a API
 *   express     -> npm install express     --save Instala as dependencias para criar uma API
 *   cors        -> npm install cors        --save Instala as dependencias para configurar as permissões de uma API
 *   body-parser -> npm install body-parser --save Instala as dependencias para receber os tipos de dados via POST ou PUT
************************************************************************************************/

const express = require('express')
const cors    = require('cors')
const bodyParser = require('body-parser')

const PORT = process.PORT || 8080

//Instancia na classe do express
const app = express()

//Configuração do cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors())
    next()
})

const controllerFilme = require('./controller/filme/controller_filme.js')

//Endpoint para CRUD de filmes 

//Retorna a lista de filmes
app.get('/v1/locadora/filme', cors(), async (request, response) => {
    let filme = await controllerFilme.listarFilmes()

    response.status(filme.status_code)
    response.json(filme)
})

//Retornar um filme filtrando pelo id 
app.get('/v1/locadora/filme/:id', cors(), async (request, response) => {
    let idFilme = request.params.id
    let filme = await controllerFilme.buscarFilmesId(idFilme)

    response.status(filme.status_code)
    response.json(filme)
})

app.listen(PORT, () => {
    console.log('API aguardando requisições.....')
})
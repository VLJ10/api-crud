/**********************************************************************************************************
 * Objetivo: Arquivo responsavel pela realização do CRUD de filme no Banco de Dados MySQL
 * Data: 01/10/2025
 * Autor: Vinicius Julio
 * Versão: 1.0
 ***********************************************************************************************************/

/***********************************************************************************************************
 * Dependencias do node para banco de dados relacional
 *      sequelize  -> Foi uma biblioteca para acesso a banco de dados
 *      Prisma     -> É uma biblioteca atual para acesso e manipulação de dados, utilizando SQL ou ORM (MySQL, PostgreSQL, SQLServer, Oracle)
 *      Knex       -> É uma biblioteca atual para acesso e manipulação de dados, utilizando SQl (MySQL)
 * 
 * Dependencia do node para banco de Dados NÃO relacional
 *      Mongoose   -> É uma biblioteca para acesso a banco de dados não relacional (MongoDB)
 * 
 * 
 * 
 * Instalação do Prisma
 *      npm install prisma --save          -> Realiza a conexão com BD
 *      npm install @prisma/client --save  -> Permite executar scripts SQL no BD
 * 
 *      
 *      npx prisma migrate          -> Permite sincronizar o Prisma com BD, Modelar o BD conforme as configurações do ORM.
 *                                      CUIDADO: Esse comando faz um reset no BD
 *      npx prisma migrate reset    -> realiza o reset do dataBase
 *      npx prima generete          -> realiza apenas o sincronismo com o BD
 * 
 * ------------------------------------------------------------------------------------------------------------------
 * 
 *  $queryRawUnsafe()   -> permite executar apenas scripts SQL que retornam dados do BD (SELECT), permite também executar um script SQL através de uma variavel
 * 
 *  $executeRawUnsafe() -> permite executar spcripts SQL que NÃO retornam dados do BD (INSERT, UPDATE, DELETE)
 * 
 *  $queryRaw()   -> permite executar apenas scripts SQL que retornam dados do BD (SELECT), permite APENAS executar um script SQL direto no metodo. 
 *                   Permite também aplicar segurança contra SQl injection
 * 
 *  $executeRaw() -> permite executar spcripts SQL que NÃO retornam dados do BD (INSERT, UPDATE, DELETE), permite APENAS executar um script SQL direto no metodo. 
 *                   Permite também aplicar segurança contra SQl injection
 * 
 * iniciar o prisma npx prisma init
 * 
 *  
 ***********************************************************************************************************/

//Importe da biblioteca do PrismaClient
//const { PrismaClient } = require('@prisma/client')
const {PrismaClient} = require('../../generated/prisma')

//Cria um objeto do prisma client para manipular os scripts SQL
const prisma = new PrismaClient()

//Retorna todos os filmes do Banco de dados
const getSelectAllFilms = async function () {

    try {
        //Script SQL 
        let sql = `select * from tbl_filme order by id desc`

        //Executa no BD o script SQL
        let result = await prisma.$queryRawUnsafe(sql)

        //validação para identificar se o retorno do banco é um ARRAY (vazio ou com dados)
        if (Array.isArray(result)) {
            return result
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }

}

//Retorna um filme pelo id do banco de dados
const getSelectByIdAllFilms = async function (id) {
    try {
        //Script SQL 
        let sql = `select * from tbl_filme where id=${id} `

        //Executa no BD o script SQL
        let result = await prisma.$queryRawUnsafe(sql)

        //validação para identificar se o retorno do banco é um ARRAY (vazio ou com dados)
        if (Array.isArray(result)) {
            return result
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}

//Insere um filme no banco de dados
const setInsertFilms = async function (filme) {

}

//Atualiza um filme existente no banco de dados filtrando pelo ID
const setUpdateFilms = async function (filme) {

}

//Exclui um filme existente no banco de dados filtrando pelo ID
const setDeleteFilms = async function (id) {

}

module.exports = {
    getSelectAllFilms,
    getSelectByIdAllFilms
}
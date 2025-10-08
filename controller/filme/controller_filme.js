/**********************************************************************************************************
 * Objetivo: Arquivo responsavel pela manipulação de dados entre o APP e a Model
 *                  (Validações tratamento de dados, tramento de erros, etc)
 * Data: 07/10/2025
 * Autor: Vinicius Julio
 * Versão: 1.0
 ***********************************************************************************************************/
//Importe do arquivo DAO para manipular o CRUD no BD
const filmeDAO = require('../../model/DAO/filme.js')

const MESSAGE_DEFAUT = require('../modulo/config_messages.js')

//Retorna uma lista de filmes
const listarFilmes = async function () {

    //Realizando uma copia do objeto MESSAGE_DEFAUT, permitindo que as alterações desta função não interfiram em outras funções
    let MESSAGE = JSON.parse(JSON.stringify(MESSAGE_DEFAUT))
    try {
        let result = await filmeDAO.getSelectAllFilms()

        if (result) {

            if (result.length > 0) {
                MESSAGE.HEADER.status = MESSAGE.SUCESS_REQUEST.status
                MESSAGE.HEADER.status_code = MESSAGE.SUCESS_REQUEST.status_code
                MESSAGE.HEADER.response.films = result

                return MESSAGE.HEADER  // 200
            } else {
                return MESSAGE.ERROR_NOT_FOUND  // 404
            }

        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
        }


    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
    //Chama a função do DAO para retornar a lista de filmes

}

//Retorna um filme filtrando pelo ID
const buscarFilmesId = async function (id) {

    let MESSAGE = JSON.parse(JSON.stringify(MESSAGE_DEFAUT))

    try {
        //Validação de campo obrigatorio 
        if (id != '' && id != null && id != undefined && !isNaN(id) && id > 0 ) {      
            //Chama a função para filtrar pelo ID    
            let result = await filmeDAO.getSelectByIdAllFilms(parseInt(id))

            
            if (result) {

                if (result.length > 0 ) {
                    MESSAGE.HEADER.status = MESSAGE.SUCESS_REQUEST.status
                    MESSAGE.HEADER.status_code = MESSAGE.SUCESS_REQUEST.status_code
                    MESSAGE.HEADER.response.film = result

                    return MESSAGE.HEADER
                } else {
                    return MESSAGE.ERROR_NOT_FOUND //404
                }

            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
            }

        } else {
            return MESSAGE.ERROR_REQUIRED_FIELDS //400
        }

    } catch (error) {
        
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

//Insere um novo filme
const inserirFilmes = async function (filme) {

}

//Atualiza um filme filtrando pelo id
const atualizarFilmes = async function (filme, id) {

}

//Exclui um filme filtrando pelo id
const excluirFilmes = async function (id) {

}

module.exports = {
    listarFilmes,
    buscarFilmesId
}
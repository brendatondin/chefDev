
import CardapioDAO from "../DAO/DAOcardapio.js"

const CardapioValidacoes = {
    _validaGetCardapio : async (codigo, callback)=>{
        const cardapio = await callback(codigo)
        if(cardapio === undefined){
            throw new Error (`Aviso: ${codigo} não encontrado!`)
        }else{
            return cardapio
        }
    },
    _validaPostCardapio: async (cardapio, callback)=>{
        if(cardapio.prato.length < 1 ){
            throw new Error ("Aviso: prato não inserido!")
        }else{
            const postCardapio = await callback(cardapio)
            return cardapio
        }
    },
    _ValidaDeletaCardapio : async (codigo, callback)=>{
        const cardapio = await CardapioDAO.pegaUmPrato(codigo)
        if(cardapio == undefined){
            throw new Error(`Aviso: ${codigo} não existente`)
        }else{
            await callback(codigo)
            return cardapio
        }
    },
    _CardapioAtualiza : async (codigo, callback, novoCardapio)=>{
        const cardapio = await callback(codigo, novoCardapio)
        if(cardapio === undefined){
            throw new Error("Não conseguimos atualizar essa informação no banco de dados")
        }else{
                return cardapio
            }
    },
    _ValidaReqBodyCardapio : async (body)=>{
        if(body.prato){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    }
}

export default CardapioValidacoes
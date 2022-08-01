
import CardapioDAO from "../DAO/cardapioDAO.js"

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
        if(!cardapio.prato){
            throw new Error ("Aviso: prato não inserido!")
        }else{
            const postCardapio = await callback(cardapio)
            return cardapio
        }
    },
    _ValidaDeletaCardapio : async (codigo, callback)=>{
        const cardapio = await CardapioDAO.deletaPrato(codigo)
        if(cardapio == undefined){
            throw new Error(`Aviso: ${codigo} não existente`)
        }else{
            await callback(codigo)
            return cardapio
        }
    },
    _PedidoAtualiza : async (codigo, callback, cardapioValidado)=>{
        const cardapio = await callback(cardapio, cardapioValidado)
            if(cardapio === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return cardapio
            }
    },
    _ValidaReqBodyCardapio : async (body)=>{
        if(body.codigo && body.prato){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    }
}

export default CardapioValidacoes
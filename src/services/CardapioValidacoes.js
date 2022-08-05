
import CardapioDAO from "../DAO/DAOcardapio.js"

const CardapioValidacoes = {
    _validaGetCardapio : async (codigo, callback)=>{
        const cardapio = await callback(codigo)
        if(cardapio === undefined){
            throw new Error (`Aviso: prato de codigo ${codigo} não encontrado!`)
        }else{
            return cardapio
        }
    },
   
    _ValidaDeletaCardapio : async (codigo, callback)=>{
        const cardapio = await CardapioDAO.pegaUmCodigo(codigo)
        if(cardapio == undefined){
            throw new Error(`Aviso: prato de codigo ${codigo} não existente`)
        }else{
            await callback(codigo)
            return cardapio
        }
    },
    _CardapioAtualiza : async (codigo, callback, novoCardapio)=>{
        const cardapio = await callback(codigo, novoCardapio)
        if(cardapio === undefined){
            throw new Error("Não conseguimos excluir essa informação do nosso banco de dados")
        }else{
                return cardapio
            }
    },
    _ValidaReqBodyCardapio : async (body)=>{
        if(body.prato){
            return body
        }else{
            throw new Error ("Preencha todos os campos!")
        }
    }
}

export default CardapioValidacoes
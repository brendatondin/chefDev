import cardapioDAO from "../DAO/cardapioDAO.js" 


const CardapioValidacoes = {
    _validaGetCardapio : async (codigo, callback)=>{
        const cardapio = await callback(codigo)
        if(cardapio === undefined){
            throw new Error (`Aviso: ${codigo} não encontrado!`)
        }else{
            return cardapio
        }
    },
}

export default CardapioValidacoes
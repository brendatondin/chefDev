


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
            throw new Error ("Aviso: mesa não encontrado!")
        }else{
            const postCardapio = await callback(cardapio)
            return cardapio
        }
    },
    _ValidaDeletaCardapio : async (codigo, callback)=>{
        const cardapio = await cardapioDAO.deletaPrato(codigo)
        if(cardapio == undefined){
            throw new Error(`Aviso: ${codigo} não existente`)
        }else{
            await callback(codigo)
            return cardapio
        }
    }
}

export default CardapioValidacoes
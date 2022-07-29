const Validacoes = {

    _validaContato : async (contato, callback)=>{
        const cliente = await callback(contato)
        if(cliente === undefined){
            throw new Error (`contato: ${contato} não encontrado!`)
        }else{
            return cliente
        }
    },

    _validaPedidos : async (comanda, callback)=>{
        const pedidos = await callback(comanda)
        if(pedidos === undefined){
            throw new Error (`comanda: ${comanda} não encontrado!`)
        }else{
            return pedidos
        }
    }
}

export default Validacoes
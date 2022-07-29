const Validacoes = {

    _validaGet : async (contato, callback)=>{
        const cliente = await callback(contato)
        if(cliente === undefined){
            throw new Error (`Aviso: ${contato} não encontrado!`)
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
    },

    _ValidaDeleta : async (id, callback)=>{
        const cliente = await callback(id)
        if(cliente == undefined){
            throw new Error(`Aviso: ${id} foi deletado!`)
        }else{
            return cliente
        }
    },

}

export default Validacoes
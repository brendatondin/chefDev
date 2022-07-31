const Validacoes = {

    _validaGet : async (contato, callback)=>{
        const cliente = await callback(contato)
        if(cliente === undefined){
            throw new Error (`Aviso: ${contato} não encontrado!`)
        }else{
            return cliente
        }
    },

    _ValidaDeleta : async (id, callback)=>{
        const cliente = await callback(id)
        if(cliente == undefined){
            throw new Error(`Aviso: ${id} não deletado!`)
        }else{
            return cliente
        }
    },

    _ValidaAtualiza : async (id, callback, novoBody)=>{
        const cliente = await callback(id, novoBody)
            if(cliente === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return cliente
            }
        
    },

    _ValidaReqBody : async (body)=>{
        if(body.nome && body.email && body.contato){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    },

    _validaGetPedidos : async (comanda, callback)=>{
        if(pedidos === undefined){
            throw new Error (`Aviso: ${comanda} não encontrado!`)
        }else{
            const pedidos = await callback(comanda)
            return pedidos
        }
    },
    _validaPostPedidos : async (pedidos, callback)=>{
        if(!pedidos.mesa){
            throw new Error ("Aviso: mesa não encontrado!")
        }else{
            const postPedidos = await callback(pedidos)
            return pedidos
        }
    },

    _PedidoAtualiza : async (comanda, callback, pedidoValidado)=>{
        if(pedidos === undefined){
            throw new Error("Não conseguimos atualizar essa informação no banco de dados")
        }else{
                const pedidos = await callback(comanda, pedidoValidado)
                return pedidos
            }
        
    },

    _ValidaReqBodyPedidos : async (body)=>{
        if(body.comanda && body.prato && body.mesa){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    },

    _ValidaDeletaPedido : async (comanda, callback)=>{
        const pedidos = await callback(comanda)
        if(pedidos == undefined){
            throw new Error(`Aviso: ${comanda} não deletado!`)
        }else{
            return pedidos
        }
    }
}

export default Validacoes
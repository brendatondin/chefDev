import pedidosDAO from "../DAO/pedidosDAO.js" 


const PedidosValidacoes = {
    _validaGetPedidos : async (comanda, callback)=>{
        const pedidos = await callback(comanda)
        if(pedidos === undefined){
            throw new Error (`Aviso: ${comanda} não encontrado!`)
        }else{
            return pedidos
        }
    },
    _validaPostPedidos : async (pedidos, callback)=>{
        if(pedidos.prato.length < 1 || pedidos.mesa.length < 0){
            throw new Error ("Aviso: preencha todos os campos")
        }else{
            const postPedidos = await callback(pedidos)
            return pedidos
        }
    },

    _PedidoAtualiza : async (comanda, callback, pedidoValidado)=>{
        const pedidos = await callback(comanda, pedidoValidado)
            if(pedidos === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
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
        const pedidos = await pedidosDAO.pegaUmPedidoComanda(comanda)
        if(pedidos == undefined){
            throw new Error(`Aviso: ${comanda} não existente`)
        }else{
            await callback(comanda)
            return pedidos
        }
    }
}

export default PedidosValidacoes
import pedidosDAO from "../DAO/pedidosDAO.js"
const PedidosModel = {

    pegaPedidos : async ()=>{
        return await pedidosDAO.pegaPedidos()
    },
    pegaUmPedidoComanda : async (comanda)=>{
        return await pedidosDAO.pegaUmPedidoComanda(comanda)
    },
    inserePedidos :  async(pedidos)=>{
        return await pedidosDAO.inserePedidos(pedidos)
    },
    deletaPedidos : async(comanda)=>{
        return await pedidosDAO.deletaPedidos(comanda)
    },
    atualizaPedido : async (comanda)=>{
        return await pedidosDAO.atualizaPedido(comanda)
    }
}

export default PedidosModel
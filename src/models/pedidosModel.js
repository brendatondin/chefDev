import pedidosDAO from "../DAO/pedidosDAO.js"
const PedidosModel = {

    pegaPedidos : async ()=>{
        return await pedidosDAO.pegaPedidos()
    },
    pegaUmPedidoComanda : async (comanda)=>{
        return await pedidosDAO.pegaUmPedidoComanda(comanda)
    }
}

export default PedidosModel
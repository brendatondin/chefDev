import clientesDAO from "../DAO/clientesDAO.js"
const ClientesModel = {

    pegaCliente : async ()=>{
        return await clientesDAO.pegaCliente()
    },
    pegaUmClienteContato : async (contato)=>{
        return await clientesDAO.pegaUmClienteContato(contato)
    },
    insereCliente :  async(cliente)=>{
        return await clientesDAO.insereCliente(cliente)
    },
    deletaCliente : async(contato)=>{
        return await clientesDAO.deletaCliente(contato)
    },
    atualizaCliente : async (id, novoCliente)=>{
        return await clientesDAO.atualizaCliente(id, novoCliente)
    }
}

export default ClientesModel
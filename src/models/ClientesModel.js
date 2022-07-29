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
}

export default ClientesModel
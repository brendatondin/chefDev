import funcionariosDAO from "../DAO/clientesDAO.js"
const funcionariosModel = {

    pegaFuncionario : async ()=>{
        return await funcionariosDAO.pegaCliente()
    },
    pegaUmFuncionarioContato : async (contato)=>{
        return await funcionariosDAO.pegaUmClienteContato(contato)
    },
    insereFuncionario :  async(funcionario)=>{
        return await funcionariosDAO.insereCliente(funcionario)
    },
    deletaFuncionario : async(id)=>{
        return await funcionariosDAO.deletaCliente(id)
    },
    atualizaFuncionario : async (id)=>{
        return await funcionariosDAO.atualizaCliente(id)
    }
}

export default funcionariosModel
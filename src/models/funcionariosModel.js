import funcionariosDAO from "../DAO/funcionariosDAO.js"
const funcionariosModel = {

    pegaFuncionario : async ()=>{
        return await funcionariosDAO.pegaFuncionario()
    },
    pegaUmFuncionarioContato : async (contato)=>{
        return await funcionariosDAO.pegaUmFuncionarioContato(contato)
    },
    insereFuncionario :  async(funcionario)=>{
        return await funcionariosDAO.insereFuncionario(funcionario)
    },
    deletaFuncionario : async(id)=>{
        return await funcionariosDAO.deletaFuncionario(id)
    },
    atualizaFuncionario : async (id)=>{
        return await funcionariosDAO.atualizaFuncionario(id)
    }
}

export default funcionariosModel
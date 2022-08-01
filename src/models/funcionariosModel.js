import funcionariosDAO from "../DAO/funcionariosDAO.js"
const funcionariosModel = {

    pegaFuncionario : async ()=>{
        return await funcionariosDAO.pegaFuncionario()
    },
    pegaUmFuncionarioContato : async (contato)=>{
        return await funcionariosDAO.pegaUmFuncionarioContato(contato)
    },
    insereFuncionario :  async(funcionarios)=>{
        return await funcionariosDAO.insereFuncionario(funcionarios)
    },
    deletaFuncionario : async(contato)=>{
        return await funcionariosDAO.deletaFuncionario(contato)
    },
    atualizaFuncionario : async (id, novoFuncionario)=>{
        return await funcionariosDAO.atualizaFuncionario(id, novoFuncionario)
    }
}

export default funcionariosModel
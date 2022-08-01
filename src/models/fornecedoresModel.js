import fornecedoresDAO from "../DAO/fornecedoresDAO.js"

const FornecedoresModel = {

    pegaFornecedor : async ()=>{
        return await fornecedoresDAO.pegaFornecedores()
    },
    pegaUmFornecedorContato : async (contato)=>{
        return await fornecedoresDAO.pegaUmFornecedorContato(contato)
    },
    insereFornecedor :  async(fornecedor)=>{
        return await fornecedoresDAO.insereFornecedor(fornecedor)
    },
    deletaFornecedor : async(id)=>{
        return await fornecedoresDAO.deletaFornecedor(id)
    },
    atualizaFornecedor : async (id)=>{
        return await fornecedoresDAO.atualizaFornecedor(id)
    }
}

export default FornecedoresModel
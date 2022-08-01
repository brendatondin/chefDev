import fornecedoresDAO from "../DAO/fornecedoresDAO.js"

const FornecedoresModel = {

    pegaFornecedor : async ()=>{
        return await fornecedoresDAO.pegaFornecedores()
    },
    pegaUmFornecedorContato : async (contato)=>{
        return await fornecedoresDAO.pegaUmFornecedorContato(contato)
    },
    insereFornecedor :  async(fornecedores)=>{
        return await fornecedoresDAO.insereFornecedor(fornecedores)
    },
    deletaFornecedor : async(contato)=>{
        return await fornecedoresDAO.deletaFornecedor(contato)
    },
    atualizaFornecedor : async (id, novoFornecedor)=>{
        return await fornecedoresDAO.atualizaFornecedor(id, novoFornecedor)
    }
}

export default FornecedoresModel
import fornecedoresDAO from "../DAO/fornecedoresDAO.js"

const FornecedoresValidacoes = {
    _validaGetFornecedores : async (contato, callback)=>{
        const fornecedor = await callback(contato)
        if(fornecedor === undefined){
            throw new Error (`Aviso: fornecedor de contato ${contato} não encontrado!`)
        }else{
            return fornecedor
        }
    },
  
    _ValidaDeletaFornecedor : async (contato, callback)=>{
        const fornecedores = await fornecedoresDAO.pegaUmFornecedorContato(contato)
        if(fornecedores == undefined){
            throw new Error(`Aviso: ${contato} não existente`)
        }else{
            await callback(contato)
            return fornecedores
        }
    },
    _FornecedorAtualiza : async (id, callback, fornecedorValidado)=>{
        const fornecedores = await callback(id, fornecedorValidado)
            if(fornecedores === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return fornecedores
            }
    },
    _ValidaReqBodyFornecedor : async (body)=>{
        if(body.nome && body.email && body.contato){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    }
}

export default FornecedoresValidacoes
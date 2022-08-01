import funcionariosDAO from "../DAO/funcionariosDAO.js";

const FuncionariosValidacoes = {

    _validaGetFuncionarios : async (contato, callback)=>{
        const funcionario = await callback(contato)
        if(funcionario === undefined){
            throw new Error (`Aviso: ${contato} não encontrado!`)
        }else{
            return funcionario
        }
    },

    _ValidaDeletaFuncionarios : async (contato, callback)=>{
        const funcionario = await funcionariosDAO.pegaUmFuncionarioContato(contato)
        if(funcionario == undefined){
            throw new Error(`Aviso: ${contato} não deletado!`)
        }else{
            await callback(contato)
            return funcionario
        }
    },

    _ValidaAtualizaFuncionarios : async (id, callback, novoBody)=>{
        const funcionario = await callback(id, novoBody)
            if(funcionario === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return funcionario
            }
        
    },

    _ValidaReqBodyFuncionarios : async (body)=>{
        if(body.nome && body.email && body.cargo && body.salario && body.contato){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar essa informação!")
        }
    },

}

export default FuncionariosValidacoes
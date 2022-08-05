import funcionariosDAO from "../DAO/funcionariosDAO.js";

const FuncionariosValidacoes = {
    _validaGetFuncionarios: async (contato, callback) => {
        const funcionario = await callback(contato)
        if (funcionario === undefined) {
            throw new Error(`Aviso: ${contato} não encontrado!`)
        } else {
            return funcionario
        }
    },

    _AtualizaFuncionarios: async (id, callback, funcionarioValidado) => {
        const funcionarios = await callback(id, funcionarioValidado)
        if (funcionarios === undefined) {
            throw new Error("Não conseguimos atualizar essa informação no banco de dados")
        } else {
            return funcionarios
        }

    },

    _ValidaReqBodyFuncionarios: async (body) => {
        if (body.nome && body.email && body.cargo && body.salario && body.contato) {
            return body
        } else {
            throw new Error("Não foi possivel atualizar essa informação!")
        }
    },

    _ValidaDeletaFuncionarios: async (contato, callback) => {
        const funcionarios = await funcionariosDAO.pegaUmFuncionarioContato(contato)
        if (funcionarios == undefined) {
            throw new Error(`Aviso: ${contato} não existente`)
        } else {
            await callback(contato)
            return funcionarios
        }
    }
}

export default FuncionariosValidacoes
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

    _validaPostFuncionarios: async (funcionario, callback) => {
        if (!funcionario.contato) {
            throw new Error("Aviso: funcionário não encontrado!")
        } else {
            const insereFuncionarios = await callback(funcionario)
            return funcionario
        }
    },

    _AtualizaFuncionarios: async (comanda, callback, pedidoValidado) => {
        const funcionario = await callback(comanda, pedidoValidado)
        if (funcionario === undefined) {
            throw new Error("Não conseguimos atualizar essa informação no banco de dados")
        } else {
            return funcionario
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
        const funcionario = await funcionariosDAO.pegaUmFuncionarioContato(comanda)
        if (funcionario == undefined) {
            throw new Error(`Aviso: ${contato} não existente`)
        } else {
            await callback(contato)
            return funcionario
        }
    }
}

export default FuncionariosValidacoes
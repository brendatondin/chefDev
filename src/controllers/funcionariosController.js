import funcionariosDAO from "../DAO/funcionariosDAO.js";
import funcionariosModel from "../models/funcionariosModel.js";
import FuncionariosValidacoes from "../services/FuncionariosValidacoes.js";

const funcionariosController = (app) => {

    app.get('/funcionario', async (req, res) => {
        try {
            const todosPedidos = await PedidosModel.pegaFuncionario()
            res.json({
                "funcionario": todosFuncionarios,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/funcionarios/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const funcionario = await FuncionariosValidacoes._validaGetFuncionarios(contato, funcionariosDAO.pegaUmFuncionarioContato)
            res.json({
                "funcionario": funcionario,
                "msg": `o funcionário ${contato} esta no banco de dados`,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/funcionarios', async (req, res) => {
        const body = req.body
        try {
            const insereFuncionario = await FuncionariosValidacoes._validaPostFuncionarios(body, funcionariosDAO.insereFuncionario)
            res.json({
                "msg": "Funcionário inserido com sucesso",
                "inserefuncionario": insereFuncionario,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/funcionario/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            const deletaFuncionario = await FuncionariosValidacoes._ValidaDeletaFuncionarios(id, funcionariosDAO.deletaFuncionario)

            res.json({
                "msg": "Funcionário deletado com sucesso",
                "deletaFuncionario": deletaFuncionario,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/funcionario/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoBody = await FuncionariosValidacoes._ValidaReqBodyFuncionarios(body)
            const funcionarioValidado = await FuncionariosValidacoes._AtualizaFuncionarios(id, funcionariosDAO.atualizaFuncionario, novoBody)
            res.json({
                "msg": "Funcionários atualizado com sucesso",
                "funcionarioValidado": funcionarioValidado,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}


export default funcionariosController


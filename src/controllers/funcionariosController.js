import funcionariosDAO from "../DAO/funcionariosDAO.js";
import funcionariosModel from "../models/funcionariosModel.js";
import FuncionariosValidacoes from "../services/FuncionariosValidacoes.js";

const funcionariosController = (app) => {

    app.get('/funcionarios', async (req, res) => {
        try {
            const todosFuncionarios = await funcionariosModel.pegaFuncionarios()
            res.json({
                "funcionarios": todosFuncionarios,
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
            const funcionarios = await FuncionariosValidacoes._validaGetFuncionarios(contato, funcionariosDAO.pegaUmFuncionarioContato)
            res.json({
                "funcionarios": funcionarios,
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
                "inserefuncionarios": insereFuncionario,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/funcionarios/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            const deletaFuncionarios = await FuncionariosValidacoes._ValidaDeletaFuncionarios(id, funcionariosDAO.deletaFuncionario)

            res.json({
                "msg": "Funcionário deletado com sucesso",
                "deletaFuncionarios": deletaFuncionarios,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/funcionarios/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoBody = await FuncionariosValidacoes._ValidaReqBodyFuncionarios(body)
            const funcionariosValidados = await FuncionariosValidacoes._AtualizaFuncionarios(id, funcionariosDAO.atualizaFuncionario, novoBody)
            res.json({
                "msg": "Funcionários atualizado com sucesso",
                "funcionariosValidados": funcionariosValidados,
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


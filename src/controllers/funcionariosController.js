import funcionariosModel from "../models/funcionariosModel.js";
import FuncionariosValidacoes from "../services/FuncionariosValidacoes.js";

const funcionariosController = (app) => {

    app.get('/funcionarios', async (req, res) => {
        try {
            const todosFuncionarios = await funcionariosModel.pegaFuncionario()
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
            const funcionarios = await FuncionariosValidacoes._validaGetFuncionarios(contato, funcionariosModel.pegaUmFuncionarioContato)
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
            const insereFuncionario = await FuncionariosValidacoes._validaPostFuncionarios(body, funcionariosModel.insereFuncionario)
            res.json({
                "msg": "Funcionário inserido com sucesso",
                "funcionarios": insereFuncionario,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/funcionarios/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const deletaFuncionarios = await FuncionariosValidacoes._ValidaDeletaFuncionarios(contato, funcionariosModel.deletaFuncionario)

            res.json({
                "msg": "Funcionário deletado com sucesso",
                "Funcionários": deletaFuncionarios,
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
            const funcionariosValidados = await FuncionariosValidacoes._AtualizaFuncionarios(id, funcionariosModel.atualizaFuncionario, novoBody)
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


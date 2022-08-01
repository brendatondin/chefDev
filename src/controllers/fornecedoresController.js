import FornecedoresModel from "../models/fornecedoresModel.js"
import fornecedoresDAO from "../DAO/fornecedoresDAO.js"
import FornecedoresValidacoes from "../services/FornecedoresValidacoes.js";

const fornecedoresController = (app) => {

    app.get('/fornecedores', async (req, res) => {
        try {
            const todosFornecedores = await FornecedoresModel.pegaFornecedor()
            res.json({
                "fornecedores": todosFornecedores,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/fornecedores/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const fornecedor = await FornecedoresModel.pegaUmFornecedorContato(contato)
            res.json({
                "Fornecedor": fornecedor,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/fornecedores', async (req, res) => {
        const body = req.body
        try {
            const novoFornecedor = await FornecedoresValidacoes._validaPostForcedores(body, fornecedoresDAO.insereFornecedor)
            res.json({
                "msg": "Fornecedor inserido com sucesso",
                "fornecedor": novoFornecedor,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/fornecedores/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const deletaFornecedor = await FornecedoresValidacoes._ValidaDeletaFornecedor(contato, fornecedoresDAO.deletaFornecedor)
            res.json({
                "msg": `Fornecedor ${contato} deletado com sucesso`,
                "deletaFornecedor": deletaFornecedor,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/fornecedores/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoBody = await FornecedoresValidacoes._ValidaReqBodyFornecedor(body)
            const fornecedorValidado = await FornecedoresValidacoes._FornecedorAtualiza(id, fornecedoresDAO.atualizaFornecedor, novoBody)
            res.json({
                "msg": "Fornecedor atualizado com sucesso",
                "fornecedorValidado": fornecedorValidado,
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

export default fornecedoresController
import FornecedoresModel from "../models/fornecedoresModel.js"
import FornecedoresValidacoes from "../services/FornecedoresValidacoes.js";

const fornecedoresController = (app) => {

    app.get('/fornecedores', async (req, res) => {
        try {
            const todosFornecedores = await FornecedoresModel.pegaFornecedor()
            res.status(200).json({
                "fornecedores": todosFornecedores,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/fornecedores/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const fornecedor = await FornecedoresModel.pegaUmFornecedorContato(contato, FornecedoresModel.pegaUmFornecedorContato)
            res.status(200).json({
                "Fornecedor": fornecedor,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/fornecedores', async (req, res) => {
        const body = req.body
        try {
            const validaFornecedorBody = await FornecedoresValidacoes._ValidaReqBodyFornecedor(body)
            const novoFornecedor = await FornecedoresModel.insereFornecedor(validaFornecedorBody)
            res.status(201).json({
                "msg": "Fornecedor inserido com sucesso",
                "fornecedor": novoFornecedor,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/fornecedores/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const deletaFornecedor = await FornecedoresValidacoes._ValidaDeletaFornecedor(contato, FornecedoresModel.deletaFornecedor)
            res.status(200).json({
                "msg": `Fornecedor com o contato ${contato} deletado com sucesso`,
                "deletaFornecedor": deletaFornecedor,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/fornecedores/contato/:contato', async (req, res) => {
        const body = req.body
        const contato = req.params.contato
        try {
            const novoBody = await FornecedoresValidacoes._ValidaReqBodyFornecedor(body)
            const validaContato = await FornecedoresValidacoes._validaGetFornecedores(contato, FornecedoresModel.pegaUmFornecedorContato)
            const fornecedorValidado = await FornecedoresValidacoes._FornecedorAtualiza(validaContato.id, FornecedoresModel.atualizaFornecedor, novoBody)
            res.status(202).json({
                "msg": "Fornecedor atualizado com sucesso",
                "fornecedorValidado": fornecedorValidado,
                "erro": false
            })

        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

}

export default fornecedoresController
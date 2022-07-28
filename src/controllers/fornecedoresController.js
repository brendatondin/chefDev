
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
            const novoFornecedor = criaFornecedor(body.nome, body.email, body.contato)
            await FornecedoresModel.insereFornecedor(novoFornecedor)
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

    app.delete('/fornecedores/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await FornecedoresModel.deletaFornecedor(id)

            res.json({
                "msg": "Fornecedor deletado com sucesso",
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
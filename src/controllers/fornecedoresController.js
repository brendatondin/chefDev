
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




}

export default fornecedoresController
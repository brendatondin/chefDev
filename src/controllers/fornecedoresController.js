
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





}

export default fornecedoresController
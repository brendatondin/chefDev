





const clientesController = (app) => {

    app.get('/clientes', async (req, res) => {
        try {
            const todosClientes = await ClientesModel.pegaCliente()
            res.json({
                "clientes": todosClientes,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/clientes/email/:email', async (req, res) => {
        const email = req.params.email
        try {
            const cliente = await ClientesModel.pegaUmClienteEmail(email)
            res.json({
                "cliente": cliente,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/cliente', async (req, res) => {
        const body = req.body
        try {
            const novoCliente = criacliente(body.nome, body.email, body.contato)
            await ClienteModel.insereCliente(novoCliente)
            res.json({
                "msg": "Cliente inserido com sucesso",
                "cliente": novoCliente,
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


export default clientesController
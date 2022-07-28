


const funcionariosController = (app) => {

    app.get('/funcionario', async (req, res) => {
        try {
            const todosFuncionarios = await funcionariosModel.pegaFuncionarios()
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
            const funcionario = await funcionariosModel.pegaUmFuncionarioContato(contato)
            res.json({
                "funcionario": funcionario,
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


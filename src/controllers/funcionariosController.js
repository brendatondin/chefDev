


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

app.post('/funcionarios', async (req, res) => {
    const body = req.body
    try {
        const novoFuncionario = criafuncionario(body.nome, body.email, body.cargo, body.salario, body.contato)
        await funcionariosModel.insereFuncionario(novoCliente)
        res.json({
            "msg": "Funcionário inserido com sucesso",
            "funcionario": novoFuncionario,
            "erro": false
        })

    } catch (error) {
        res.json({
            "msg": error.message,
            "erro": true
        })
    }
})

export default funcionariosController


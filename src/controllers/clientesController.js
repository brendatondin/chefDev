import clientesDAO from "../DAO/clientesDAO.js";
import ClientesModel from "../models/ClientesModel.js";
import Validacoes from "../services/Validacoes.js";

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

    app.get('/clientes/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const cliente = await Validacoes._validaContato(contato, clientesDAO.pegaUmClienteContato)
            res.json({
                "cliente": cliente,
                "msg": `o contato ${contato} esta no banco de dados`,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "error": true
            })
        }
    })

    app.post('/clientes', async (req, res) => {
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

    app.delete('/clientes/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await ClienteModel.deletaCliente(id)

            res.json({
                "msg": "Cliente deletado com sucesso",
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/clientes/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const clienteValidado = criaCliente(body.nome, body.email, body.contato)
            await ClienteModel.atualizaCliente(id, clienteValidado)
            res.json({
                "msg": "Cliente atualizado com sucesso",
                "cliente": clienteValidado,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.patch('/clientes/contato/id/:id', async (req, res) => {
        const id = req.params.id
        const body = req.body
        try {
            validaContato(body.contato)
            await ClienteModel.atualizaCliente(id, {
                "contato": body.contato
            })
            res.json({
                "msg": "Contato atualizada",
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
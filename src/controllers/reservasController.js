import reservasModel from "../models/reservasModels.js";
import Validacoes from "../services/ClientesValidacoes.js";
import reservasDAO from "../DAO/reservasDAO.js";


const reservasController = (app) => {

    app.get('/reservas', async (req, res) => {

        try {
            const reservas = await reservasModel.verReservas()

            res.json(
                {
                    "reservas": reservas,
                    "erro": false
                }
            )
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }

    })

    app.get('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva

        try {
            const reserva = await reservasModel.verUmaReserva(idReserva)
            res.json(
                {
                    "reserva": reserva,
                    "erro": false
                }
            )
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })

    app.post('/reservas', async (req, res) => {
        const body = req.body


        try {
            const agendarReserva = await Validacoes._validaGet(body, reservasDAO.agendarReserva)

            res.json(
                {
                    "msg": "Reserva agendada com sucesso!",
                    "reserva": agendarReserva,
                    "erro": false
                })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }

    })


    app.delete('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva
        try {
            const deletaReserva = await Validacoes._ValidaDeleta(idReserva, reservasDAO.deletaReserva)

            res.json({
                "msg": "Reserva deletada com sucesso",
                "deletaReserva": deletaReserva,
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
    app.put('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva
        const body = req.body
        try {
            const novoBody = await Validacoes._ValidaReqBodyReservas(body)
            const atualizaReserva = await Validacoes._ValidaAtualiza(idReserva, reservasDAO.atualizaReserva, novoBody)
            res.json({
                "msg": "Reserva atualizada com sucesso",
                "nome": atualizaReserva,
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

export default reservasController
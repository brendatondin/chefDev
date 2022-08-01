import reservasModel from "../models/reservasModels.js";
import ReservasValidacoes from "../services/ReservasValidacoes.js";

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
            const reserva = await ReservasValidacoes._validaGetReservas(idReserva, reservasModel.verUmaReserva)
            res.json(
                {
                    "reserva": reserva,
                    "msg": `A reserva ${idReserva} foi agendada`,
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
            const agendarReserva = await ReservasValidacoes._validaPostReservas(body, reservasModel.agendarReserva)

            res.status(201).json(
                {
                    "msg": "Reserva agendada com sucesso!",
                    "reserva": agendarReserva,
                    "erro": false
                })
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }

    })

    app.delete('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva
        try {
            const deletaReserva = await ReservasValidacoes._ValidaDeletaReserva(idReserva, reservasModel.deletaReserva)

            res.status(200).json({
                "msg": "Reserva deletada com sucesso",
                "Reserva": deletaReserva,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })
    app.put('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva
        const body = req.body
        try {
            const novoBody = await ReservasValidacoes._ValidaReqBodyReservas(body)
            const atualizaReserva = await ReservasValidacoes._ReservaAtualiza(idReserva, reservasModel.atualizaReserva, novoBody)
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
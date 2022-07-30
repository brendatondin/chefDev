import reservasModel from "../models/reservasModels.js";
import Validacoes from "../services/Validacoes.js";
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

/* 
    app.delete('/reservas/nomeCliente/:nomeCliente', async (req, res) => {
        const nomeCliente = req.params.nomeCliente
        try {
            await reservasModel.deletaReserva(nomeCliente)

            res.json({
                "msg": "Reserva deletada com sucesso",
                "erro": false
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })*/
}



export default reservasController
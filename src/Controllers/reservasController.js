import reservasModel from "../models/reservasModels.js";


const reservasController = (app) => {

    app.get('/reservas', (req, res) => {

        try {
            const reservasModel = await reservasModel.verReservas()

            res.json(
                {
                    "reservas": Reserva.verReservas(),
                    "erro": false
                }
            )
        } catch (error) {
            res.jason({
                "msg": error.message,
                "erro": true
            })
        }

    })

    app.get('/reservas/nomeCliente/:nomeCliente', async (req, res) => {
        const nomeCliente = req.params.nomeCliente

        try {
            const reserva = await reservasModel.verUmaReserva(nomeCliente)
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
            const reserva = criaReserva(body.nomeCliente, body.data, body.hora, body.lugares, body.mesa)
            await reservasModel.agendarReserva(reserva)

            res.json(
                {
                    "msg": "Reserva agendada com sucesso!",
                    "reserva": reserva,
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
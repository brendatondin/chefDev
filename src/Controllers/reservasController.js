import reservasModel from "../models/reservasModels.js";


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

    /*app.get('/reservas/nomeCliente/:nomeCliente', async (req, res) => {
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
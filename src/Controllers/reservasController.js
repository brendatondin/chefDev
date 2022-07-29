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
        }catch(error){
            res.jason({
                "msg": error.message,
                "erro": true
            })
        }

    })



    app.post('/reservas', (req, res) => {
        const body = req.body
        const reserva = new Reserva(body.nomeCliente, body.data, body.hora, body.lugares, body.mesa)

        reserva.agendarReserva(reserva)

        res.json(
            {
                "msg": "Reserva agendada com sucesso!",
                "reserva": reserva,
                "erro": false
            })
    })

}

export default reservasController
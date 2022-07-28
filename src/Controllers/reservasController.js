import Reserva from "../models/reservasModels.js";


const reservasController = (app) => {

    app.get('/reservas', (req, res) => {
        const reserva = new Reserva()

        res.json(
            {
                "reservas": Reserva.verReservas(),
                "erro": false
            }
        )
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
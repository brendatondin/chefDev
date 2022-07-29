/* import bd from "../database/database.js"

let id = 0

export default class Reserva {
    constructor(nomeCliente, data, hora, lugares, mesa){
        this.id = id++
        this.nomeCliente = nomeCliente
        this.data = data
        this.hora = hora
        this.lugares = lugares
        this.mesa = mesa
        this.dataAgendamento = new Date()
    }

    agendarReserva = (reserva) =>{
        bd.push(reserva)
    }

    verReservas = () =>{
        return bd
    }
} */

const reservasModel = {
    verReservas : async ()=>{
        return await reservasDAO.verReservas()
    }

}

export default reservasModel
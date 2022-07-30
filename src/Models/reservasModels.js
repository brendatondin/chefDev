import reservasDAO from '../DAO/reservasDAO.js';

const reservasModel = {
    verReservas : async ()=>{
        return await reservasDAO.verReservas()
    },
 
    verUmaReserva : async (idReserva)=>{
        return await reservasDAO.verUmaReserva(idReserva)
    },

    agendarReserva : async (reserva)=>{
        return await reservasDAO.agendarReserva(reserva)
    },

    deletaReserva : async (nomeCliente)=>{
        return await reservasDAO.deletaReserva(nomeCliente)
    },



}

export default reservasModel

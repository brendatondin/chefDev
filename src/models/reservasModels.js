import reservasDAO from '../DAO/reservasDAO.js';

const reservasModel = {
    verReservas : async ()=>{
        return await reservasDAO.verReservas()
    },
 
    verUmaReserva : async (idReserva)=>{
        return await reservasDAO.verUmaReserva(idReserva)
    },

    verUmaReservaData : async (data)=>{
        return await reservasDAO.verUmaReservaData(data)
    },

    agendarReserva : async (reserva)=>{
        return await reservasDAO.agendarReserva(reserva)
    },
    deletaReserva : async (nomeCliente)=>{
        return await reservasDAO.deletaReserva(nomeCliente)
    },
    atualizaReserva : async (idReserva, reservaAtualizada)=>{
        return await reservasDAO.atualizaReserva(idReserva, reservaAtualizada)
    }
}

export default reservasModel

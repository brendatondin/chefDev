const reservasModel = {
    verReservas : async ()=>{
        return await reservasDAO.verReservas()
    },

    verUmaReserva : async (nomeCliente)=>{
        return await reservasDAO.verUmaReserva(nomeCliente)
    },

    agendarReserva : async (reserva)=>{
        return await reservasDAO.agendarReserva(reserva)
    },

    deletaReserva : async (nomeCliente)=>{
        return await reservasDAO.deletaReserva(nomeCliente)
    },



}

export default reservasModel

import reservasDAO from "../DAO/reservasDAO.js" 


const ReservasValidacoes = {
    _validaGetReservas : async (idReserva, callback)=>{
        const reservas = await callback(idReserva)
        if(reservas === undefined){
            throw new Error (`Aviso: ${idReserva} não encontrado!`)
        }else{
            return reservas
        }
    },
    _validaPostReservas : async (reserva, callback)=>{
        if(reserva.nomeCliente.length < 2 ||  reserva.data.length < 1 || reserva.hora.length < 1 || reserva.lugares.length < 1 || reserva.mesa.length <= 1){
            throw new Error ("Aviso: preencha todos os campos")
        }else{
            const postReserva = await callback(reserva)
            return reserva
        }
    },

    _ReservaAtualiza : async (idReserva, callback, reservaValidada)=>{
        const reservas = await callback(idReserva, reservaValidada)
            if(reservas === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return reservas
            }
        
    },

    _ValidaReqBodyReservas : async (body)=>{
        if(body.idReserva && body.nomeCliente && body.data && body.hora && body.lugares && body.mesa){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar a reserva!")
        }
    },

    _ValidaDeletaReserva : async (idReserva, callback)=>{
        const reservas = await reservasDAO.verUmaReserva(idReserva)
        if(reservas == undefined){
            throw new Error(`Aviso: ${idReserva} não existente`)
        }else{
            await callback(idReserva)
            return reservas
        }
    }
}

export default ReservasValidacoes
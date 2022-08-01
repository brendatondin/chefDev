import db from "../database/db-sqlite.js"

const reservasDAO = {
    verReservas : () =>{
        const VER_RESERVAS = `
        SELECT * FROM RESERVAS
        `
        return new Promise((resolve, reject)=>{
            db.all(VER_RESERVAS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

     verUmaReserva : (idReserva) =>{
        const VER_UMA_RESERVA = `
        SELECT * FROM RESERVAS
        WHERE idReserva = ?`

        return new Promise((resolve, reject)=>{
            db.get(VER_UMA_RESERVA, idReserva, (error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }

            })
        })
    },


    agendarReserva : (reserva) =>{
        const AGENDA_RESERVA = `
        INSERT INTO RESERVAS (nomeCliente, data, hora, lugares, mesa)
        VALUES (?,?,?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(AGENDA_RESERVA,
                reserva.nomeCliente, reserva.data, reserva.hora, reserva.lugares, reserva.mesa,
                (error)=>{
                    if(error){
                        reject(error)
                    }else
                        resolve({
                            success:"Reserva agendada."
                        })
                }
            )
        })
    },


    deletaReserva : (idReserva) =>{
        const DELETA_RESERVA = `
        DELETE FROM RESERVAS
        WHERE idReserva = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(DELETA_RESERVA, idReserva, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaReserva : (idReserva, reservaAtualizada)=>{
        const ATUALIZA_RESERVA = `
        UPDATE RESERVAS
        SET nomeCliente = ?, data = ?, hora = ?, lugares = ?, mesa = ?
        WHERE idReserva = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_RESERVA,
                reservaAtualizada.nomeCliente, reservaAtualizada.email, reservaAtualizada.hora, reservaAtualizada.lugares,reservaAtualizada.mesa,
                idReserva,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(reservaAtualizada)
                }
            )
        })  
    }

}



export default reservasDAO

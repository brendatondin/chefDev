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
    }



export default reservasDAO

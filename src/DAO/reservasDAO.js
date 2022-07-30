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

/*
    agendarReserva : () =>{
        
    },

    deletaReserva : () =>{
        
    },
 */
}

export default reservasDAO
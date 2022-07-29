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

   /*  verUmaReserva : () =>{
        
    },

    agendarReserva : () =>{
        
    },

    deletaReserva : () =>{
        
    },
 */
}

export default reservasDAO
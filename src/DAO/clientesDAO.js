import db from "../database/db-sqlite.js"

const clientesDAO  = {
    pegaCliente : ()=>{
        const PEGA_CLIENTE = `
        SELECT * FROM CLIENTES
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_CLIENTE, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaUmClienteContato: (contato)=>{
        const PEGA_UM_CLIENTE = `
        SELECT * FROM CLIENTES
        WHERE contato = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_UM_CLIENTE, contato, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },
}

export default clientesDAO
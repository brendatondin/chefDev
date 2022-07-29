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

    insereCliente : (cliente)=>{
        const INSERE_CLIENTES = `
        INSERT INTO CLIENTES (nome, email, contato)
        VALUES (?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_CLIENTES,
                cliente.nome, cliente.email, cliente.contato,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(cliente)
                }
            )
        })
    },
}

export default clientesDAO
import db from "../database/db-sqlite.js"

const pedidosDAO  = {
    pegaPedidos : ()=>{
        const PEGA_PEDIDOS = `
        SELECT * FROM PEDIDOS
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_PEDIDOS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaUmPedidoComanda: (comanda)=>{
        const PEGA_UM_PEDIDO = `
        SELECT * FROM PEDIDOS
        WHERE comanda = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_UM_PEDIDO, comanda, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },
}

export default pedidosDAO
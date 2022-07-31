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

    inserePedidos : (pedidos)=>{
        const INSERE_PEDIDOS = `
        INSERT INTO PEDIDOS (comanda, prato, mesa)
        VALUES (?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_PEDIDOS,
                pedidos.comanda, pedidos.prato, pedidos.mesa,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(pedidos)
                }
            )
        })
    },
    
    deletaPedidos : (comanda)=>{
        const DELETA_PEDIDOS = `
        DELETE FROM PEDIDOS
        WHERE comanda = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(DELETA_PEDIDOS, comanda, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaPedido : (comanda, novoPedidos)=>{
        const ATUALIZA_PEDIDOS = `
        UPDATE PEDIDOS
        SET prato = ?, mesa = ?
        WHERE comanda = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_PEDIDOS,
                novoPedidos.prato, novoPedidos.mesa,
                comanda,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(novoPedidos)
                }
            )
        })  
    }
}



export default pedidosDAO
import db from "../database/db-sqlite.js"

const cardapioDAO  = {
    pegaTodosUsuarios : ()=>{
        const PEGA_CARDAPIO = `
        SELECT * FROM CARDAPIO
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_CARDAPIO, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

}

export default cardapioDAO
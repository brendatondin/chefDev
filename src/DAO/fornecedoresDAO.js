import db from "../database/db-sqlite.js"

const fornecedoresDAO  = {
    pegaFornecedores : ()=>{
        const PEGA_FORNECEDORES = `
        SELECT * FROM FORNECEDORES
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_FORNECEDORES, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

}

export default fornecedoresDAO
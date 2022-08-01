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

    pegaUmFornecedorContato: (contato)=>{
        const PEGA_UM_FORNECEDOR = `
        SELECT * FROM FORNECEDORES
        WHERE contato = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_UM_FORNECEDOR, contato, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    insereFornecedor : (fornecedor)=>{
        const INSERE_FORNECEDORES = `
        INSERT INTO FORNECEDORES (nome, email, contato)
        VALUES (?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_FORNECEDORES,
                fornecedor.nome, fornecedor.email, fornecedor.contato,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(fornecedor)
                }
            )
        })
    },

}

export default fornecedoresDAO
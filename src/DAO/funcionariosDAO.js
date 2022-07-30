import db from "../database/db-sqlite.js"

const funcionariosDAO = {
    pegaFuncionario: () => {
        const PEGA_FUNCIONARIO = `
        SELECT * FROM FUNCIONARIOS
        `
        return new Promise((resolve, reject) => {
            db.all(PEGA_FUNCIONARIO, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

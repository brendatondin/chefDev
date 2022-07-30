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
    },

    pegaUmFuncionarioContato: (contato) => {
        const PEGA_UM_FUNCIONARIO = `
        SELECT * FROM FUNCIONARIOS
        WHERE contato = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_UM_FUNCIONARIO, contato, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

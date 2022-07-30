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
    },

    insereFuncionario: (funcionario) => {
        const INSERE_FUNCIONARIO = `
        INSERT INTO FUNCIONARIOS (nome, email, cargo, salario, contato)
        VALUES (?,?,?,?,?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_FUNCIONARIO,
                funcionario.nome, funcionario.email, funcionario.cargo, funcionario.salario, funcionario.contato,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(funcionario)
                }
            )
        })
    }
}

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
    },

    deletaFuncionario: (id) => {
        const DELETA_FUNCIONARIO = `
        DELETE FROM FUNCIONARIOS
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.get(DELETA_FUNCIONARIO, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaFuncionario: (id, novoFuncionario) => {
        const ATUALIZA_FUNCIONARIO = `
        UPDATE FUNCIONARIOS
        SET nome = ?, email = ?, cargo = ?, salario = ?, contato = ?
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_FUNCIONARIO,
                novoFuncionario.nome, novoFuncionario.email, novoFuncionario.cargo, novoFuncionario.salario, novoFuncionario.contato,
                id,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(novoFuncionario)
                }
            )
        })
    }
}

export default funcionariosDAO

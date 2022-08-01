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

    insereFuncionario: (funcionarios) => {
        const INSERE_FUNCIONARIOS = `
        INSERT INTO FUNCIONARIOS (nome, email, cargo, salario, contato)
        VALUES (?,?,?,?,?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_FUNCIONARIOS,
                funcionarios.nome, funcionarios.email, funcionarios.cargo, funcionarios.salario, funcionarios.contato,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(funcionarios)
                }
            )
        })
    },

    deletaFuncionario: (contato) => {
        const DELETA_FUNCIONARIOS = `
        DELETE FROM FUNCIONARIOS
        WHERE contato = ?
        `
        return new Promise((resolve, reject) => {
            db.get(DELETA_FUNCIONARIOS, contato, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaFuncionario: (id, novoFuncionario) => {
        const ATUALIZA_FUNCIONARIOS = `
        UPDATE FUNCIONARIOS
        SET nome = ?, email = ?, cargo = ?, salario = ?, contato = ?
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_FUNCIONARIOS,
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

import db from "../database/db-sqlite.js"

const cardapioDAO = {
    pegaCardapio: () => {
        const PEGA_CARDAPIO = `
        SELECT * FROM CARDAPIO
        `
        return new Promise((resolve, reject) => {
            db.all(PEGA_CARDAPIO, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },
    pegaUmCodigo: (codigo) => {
        const PEGA_UM_PRATO = `
        SELECT * FROM CARDAPIO
        WHERE codigo = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_UM_PRATO, codigo, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },
    inserePrato: (cardapio) => {
        const INSERE_PRATO = `
        INSERT INTO CARDAPIO (codigo, prato)
        VALUES (?,?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_PRATO,
                cardapio.codigo, cardapio.prato,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(cardapio)
                }
            )
        })
    },
    DeletaPrato: (codigo) => {
        const DELETA_PRATOS = `
        DELETE FROM CARDAPIO
        WHERE codigo = ?
        `
        return new Promise((resolve, reject) => {
            db.get(DELETA_PRATOS, codigo, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },
    AtualizaPrato: (codigo, novoCardapio) => {
        const ATUALIZA_CARDAPIO = `
        UPDATE CARDAPIO
        SET prato = ?
        WHERE codigo = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_CARDAPIO,
                novoCardapio.prato,
                codigo,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(novoCardapio)
                }
            )
        })
    }

}



export default cardapioDAO
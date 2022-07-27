import sqlite3 from "sqlite3";
import {
    dirname
} from "path";
import {
    fileURLToPath
} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
    import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath)

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "email" varchar(64),
    "contato" numeric 
);`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, CONTATO)
VALUES 
    (1, 'Hudson Uchoa', 'hudsonuchoa@bol.com.br', 99856847),
    (2, 'Joca Moura', 'jocamoura@gmail.com', 465416541),
    (3, 'Guilherme Da Mata', 'guilhermedamata@yahoo.com', 694164184796)
`

function criaTabelaClt() {
    db.run(CLIENTES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de clientes");
    });
}


function populaTabelaClt() {
    db.run(ADD_CLIENTES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de clientes");
    });
}

<<<<<<< HEAD
=======
const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "comanda" INTEGER PRIMARY KEY AUTOINCREMENT,
    "prato" varchar(64),
    "mesa" numeric 
);`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (COMANDA, PRATO, MESA)
VALUES 
    (1, 'Macarrão', 1),
    (2, 'Pizza', 2),
    (3, 'Hamburguer', 3)
`

function criaTabelaPd() {
    db.run(PEDIDOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de pedidos");
    });
}


function populaTabelaPd() {
    db.run(ADD_PEDIDOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de pedidos");
    });
}

>>>>>>> ef68e94eeece2a6c2383dc5fb589084743fab391

db.serialize(() => {
    criaTabelaClt();
    populaTabelaClt();
<<<<<<< HEAD
=======
    criaTabelaPd();
    populaTabelaPd()
>>>>>>> ef68e94eeece2a6c2383dc5fb589084743fab391
});
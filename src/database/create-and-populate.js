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


db.serialize(() => {
    criaTabelaClt();
    populaTabelaClt();
});
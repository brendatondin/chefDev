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
INSERT INTO CLIENTES ( NOME, EMAIL, CONTATO)
VALUES 
    ('Hudson Uchoa', 'hudsonuchoa@bol.com.br', 99856847),
    ('Joca Moura', 'jocamoura@gmail.com', 465416541),
    ('Guilherme Da Mata', 'guilhermedamata@yahoo.com', 694164184796)
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

const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "comanda" INTEGER PRIMARY KEY AUTOINCREMENT,
    "prato" varchar(64),
    "mesa" numeric 
);`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS ( PRATO, MESA)
VALUES 
    ('Macarrão', 1),
    ('Pizza', 2),
    ('Hamburguer', 3)
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

const CARDAPIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS CARDAPIO (
    "codigo" INTEGER PRIMARY KEY AUTOINCREMENT,
    "prato" varchar(64)
    
);`;

const ADD_CARDAPIO_DATA = `
INSERT INTO CARDAPIO (PRATO)
VALUES 
    ( 'Frutos do mar'),
    ( 'Massa Italiana'),
    ( 'Sobremesa')
`

function criaTabelaCd() {
    db.run(CARDAPIO_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de cardapio");
    });
}


function populaTabelaCd() {
    db.run(ADD_CARDAPIO_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de cardapio");
    });
}

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "email" varchar(64),
    "cargo" varchar(64),
    "salario" numeric,
    "contato" numeric
);`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS ( NOME, EMAIL, CARGO, SALARIO, CONTATO)
VALUES 
    ('Mariana Silveira', 'mariana_silveira@bol.com.br', 'Chef', 5.000, 99856847),
    ('Júlio Martins', 'julio_martins@gmail.com', 'Auxiliar de cozinha', 3.000, 465416541),
    ('Milena Gasparini', 'milena_gasparini@yahoo.com', 'Recepcionista', 2.000, 694164184796)
`

function criaTabelaFunc() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de funcionários");
    });
}


function populaTabelaFunc() {
    db.run(ADD_FUNCIONARIOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de funcionários");
    });
}

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "email" varchar(64),
    "contato" numeric 
);`;

const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES ( NOME, EMAIL, CONTATO)
VALUES 
    ('Casa das massas', 'casadasmassas@gmail.com', 1535001010),
    ('Peixaria bons mares', 'pbonsmares@hotmail.com', 1432302020),
    ('Hortifruti verdurão', 'hverdurao@outlook.com', 1535320000),
    ('Distribuidora nosso tempero', 'dtnossotempero@outlook.com', 4135350000),
    ('Carnes rei', 'carnesrei@hotmail.com.br', 1133330000)
`

function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de fornecedores");
    });
}


function populaTabelaFornecedores() {
    db.run(ADD_FORNECEDORES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de fornecedores");
    });
}

const RESERVAS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "RESERVAS" (
        "idReserva" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nomeCliente" varchar(64),
        "data" varchar(64),
        "hora" int,
        "lugares" int,
        "mesa" int
        
    );`

const ADD_RESERVAS_DATA = `
    INSERT INTO RESERVAS (NOMECLIENTE, DATA, HORA, LUGARES, MESA)
    VALUES 
        ('Sr. João Pedro de Moura', '11/09/2022', 19, 4, 8),
        ('Maria da Conceição', '11/09/2022', 21, 6, 15),
        ('Joana Costa', '11/09/2022', 19, 2, 6),
        ('Mariano Joaquim', '11/09/2022', 19, 5, 22),
        ('João Gabriel', '12/09/2022', 19, 4, 1),
        ('Maria Joana', '12/09/2022', 21, 6, 12),
        ('Joana Frente', '12/09/2022', 19, 2, 14),
        ('Mariana Joaquina', '12/09/2022', 19, 5, 2),
        ('Pedro de Moura', '12/09/2022', 19, 4, 8),
        ('Conceição', '12/09/2022', 21, 6, 15),
        ('Acosta', '12/09/2022', 19, 2, 6),
        ('Joaquim', '12/09/2022', 19, 5, 22),
        ('Gabriel', '12/09/2022', 19, 4, 4),
        ('Joana', '12/09/2022', 21, 6, 11),
        ('Frota', '12/09/2022', 19, 2, 13),
        ('Mariana', '12/09/2022', 19, 5, 3),

        ('Sr. João Pedro de Moura', '13/09/2022', 19, 4, 8),
        ('Maria da Conceição', '13/09/2022', 21, 6, 15),
        ('Joana Costa', '13/09/2022', 19, 2, 6),
        ('Mariano Joaquim', '13/09/2022', 19, 5, 22),
        ('João Gabriel', '13/09/2022', 19, 4, 1),
        ('Maria Joana', '13/09/2022', 21, 6, 12),
        ('Joana Frente', '13/09/2022', 19, 2, 14),
        ('Mariana Joaquina', '13/09/2022', 19, 5, 2),

        ('Pedro de Moura', '13/09/2022', 19, 4, 9),
        ('Conceição', '13/09/2022', 21, 6, 16),
        ('Acosta', '13/09/2022', 19, 2, 7),
        ('Joaquim', '13/09/2022', 19, 5, 23),
        ('Gabriel', '13/09/2022', 19, 4, 5),
        ('Joana', '13/09/2022', 21, 6, 11),
        ('Frota', '13/09/2022', 19, 2, 13),
        ('Mariana', '13/09/2022', 19, 5, 3),

        ('Sr. João Pedro de Moura', '14/09/2022', 19, 4, 8),
        ('Maria da Conceição', '14/09/2022', 21, 6, 15),
        ('Joana Costa', '14/09/2022', 19, 2, 6),
        ('Mariano Joaquim', '14/09/2022', 19, 5, 22),
        ('João Gabriel', '14/09/2022', 19, 4, 1),
        ('Maria Joana', '14/09/2022', 21, 6, 12),
        ('Joana Frente', '14/09/2022', 19, 2, 14),
        ('Mariana Joaquina', '14/09/2022', 19, 5, 2),
        ('Pedro de Moura', '14/09/2022', 19, 4, 9),
        ('Conceição', '14/09/2022', 21, 6, 16),
        ('Acosta', '14/09/2022', 19, 2, 7),
        ('Joaquim', '14/09/2022', 19, 5, 23),
        ('Gabriel', '14/09/2022', 19, 4, 5),
        ('Joana', '14/09/2022', 21, 6, 11),
        ('Frota', '14/09/2022', 19, 2, 13),
        ('Mariana', '14/09/2022', 19, 5, 3),

        ('Sr. João Pedro de Moura', '15/09/2022', 19, 4, 8),
        ('Maria da Conceição', '15/09/2022', 21, 6, 12),
        ('Joana Costa', '15/09/2022', 19, 2, 6),
        ('Mariano Joaquim', '15/09/2022', 19, 5, 22),
        ('João Gabriel', '15/09/2022', 19, 4, 1),
        ('Maria Joana', '15/09/2022', 21, 6, 12),
        ('Joana Frente', '15/09/2022', 19, 2, 14),
        ('Mariana Joaquina', '15/09/2022', 19, 5, 2),
        ('Pedro de Moura', '15/09/2022', 19, 4, 9),
        ('Conceição', '15/09/2022', 21, 6, 16),
        ('Acosta', '15/09/2022', 19, 2, 7),
        ('Joaquim', '15/09/2022', 19, 5, 23),
        ('Gabriel', '15/09/2022', 19, 4, 5),
        ('Joana', '15/09/2022', 21, 6, 11),
        ('Frota', '15/09/2022', 19, 2, 13),
        ('Mariana', '15/09/2022', 19, 5, 3),

        
        ('Sr. João Pedro de Moura', '16/09/2022', 19, 4, 8),
        ('Maria da Conceição', '16/09/2022', 21, 6, 12),
        ('Joana Costa', '16/09/2022', 19, 2, 6),
        ('Mariano Joaquim', '16/09/2022', 19, 5, 22),
        ('João Gabriel', '16/09/2022', 19, 4, 1),
        ('Maria Joana', '16/09/2022', 21, 6, 12),
        ('Joana Frente', '16/09/2022', 19, 2, 14),
        ('Mariana Joaquina', '16/09/2022', 19, 5, 2),
        ('Pedro de Moura', '16/09/2022', 19, 4, 9),
        ('Conceição', '16/09/2022', 21, 6, 16),
        ('Acosta', '16/09/2022', 19, 2, 7),
        ('Joaquim', '16/09/2022', 19, 5, 23),
        ('Gabriel', '16/09/2022', 19, 4, 5),
        ('Joana', '16/09/2022', 21, 6, 11),
        ('Frota', '16/09/2022', 19, 2, 13),
        ('Mariana', '16/09/2022', 19, 5, 3),

        
        ('Sr. João Pedro de Moura', '17/09/2022', 19, 4, 8),
        ('Maria da Conceição', '17/09/2022', 21, 6, 12),
        ('Joana Costa', '17/09/2022', 19, 2, 6),
        ('Mariano Joaquim', '17/09/2022', 19, 5, 22),
        ('João Gabriel', '17/09/2022', 19, 4, 1),
        ('Maria Joana', '17/09/2022', 21, 6, 12),
        ('Joana Frente', '17/09/2022', 19, 2, 14),
        ('Mariana Joaquina', '17/09/2022', 19, 5, 2),
        ('Pedro de Moura', '17/09/2022', 19, 4, 9),
        ('Conceição', '17/09/2022', 21, 6, 16),
        ('Acosta', '17/09/2022', 19, 2, 7),
        ('Joaquim', '17/09/2022', 19, 5, 23),
        ('Gabriel', '17/09/2022', 19, 4, 5),
        ('Joana', '17/09/2022', 21, 6, 11),
        ('Frota', '17/09/2022', 19, 2, 13),
        ('Mariana', '17/09/2022', 19, 5, 3)
        
        `

function criaTabelaReservas() {
    db.run(RESERVAS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de reservas");
    });
}


function populaTabelaReservas() {
    db.run(ADD_RESERVAS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de reservas");
    });
}

db.serialize(() => {
    criaTabelaClt();
    populaTabelaClt();
    criaTabelaPd();
    populaTabelaPd();
    criaTabelaCd();
    populaTabelaCd();
    criaTabelaFunc();
    populaTabelaFunc();
    criaTabelaFornecedores();
    populaTabelaFornecedores();
    criaTabelaReservas();
    populaTabelaReservas();
});
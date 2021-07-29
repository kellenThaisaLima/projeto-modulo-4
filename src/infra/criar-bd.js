/*
Esse arquivo deve ser executado apenas uma vez para que o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

//==== TREINO
const TREINO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TREINO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "MUSCULO" varchar(255),
    "EXERCICIO" varchar(255),
    "SERIES" INTEGER,
    "REPETICOES" varchar(255)   
  );`;

const ADD_TREINO_DATA = `
INSERT INTO TREINO (MUSCULO, EXERCICIO, SERIES, REPETICOES)
VALUES 
("COSTAS", "SUPINO-COM-HALTERES", 3, "12-8-6"),
("PERNAS", "SUPER-HOMEM", 3, "6-8-12"),
("BRACOS", "CURL-COM-HALTERES", 3, "6-8-12"),
("PEITO", "PULLOVER-COM-HALTER", 3, "6-8-8"),
("GLUTEOS", "AGACHAMENTO-COM-HALTERES", 3, "8-8-12")
`

function criaTabelaTreino() {
    db.run(TREINO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de treino", error);
    });
}
function populaTabelaTreino() {
    db.run(ADD_TREINO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de treino", error);
    });
}



db.serialize( ()=> {
    criaTabelaTreino();
    populaTabelaTreino();
    
});
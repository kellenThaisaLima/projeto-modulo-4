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
("GLUTEOS", "AGACHAMENTO-COM-HALTERES", 3, "8-8-12"),
("PEITO", "Supino-inclinado-com-halteres", 3, "8-8-8"),
("BICEP", "Flexão-de-braço",   3, "8-8-8"),
("GLUTEOS", "Agachamento-Sumô",  3, "8-8-8"),
("PEITO", "Supino-reto-com-barra",   3, "8-8-8"),
("TRICEP", "Tríceps-no-banco",  3, "8-8-8"),
("ABDOME", "Abdominal-Crunch-Bicicleta-",   3, "8-8-8"),
("COSTAS", "Barra-fixa",  3, "8-8-8"),
("TRICEP", "Extensão-de-tríceps-em-pé",  3, "8-8-8"),
("PERNAS", "Agachamento", 3, "8-8-8"),
("PEITO", "Afundos-nas-barras-paralelas",  3, "8-8-8"),
("BICEP", "Flexão-de-braço-inclinada",  3, "8-8-8"),
("PERNAS", "Extensora",   3, "8-8-8"),
("BICEP", "Rosca-martelo",  3, "8-8-8"),
("ABDOME", "Hanging-leg-raise", 3, "8-8-8"),
("BICEP", "Rosca-direta",   3, "8-8-8"),
("COSTAS", "Remada-curvada-com-barra",   3, "8-8-8"),
("PEITO", "Crossover-com-pega-alta", 3, "8-8-8"),
("BICEP", "Rosca-direta-sentado", 3, "8-8-8"),
("ABDOME", "Crunch",   3, "8-8-8"),
("PERNAS", "Leg-press",   3, "8-8-8"),
("OBLIQUIOS", "Flexão-lateral-do-tronco-em-decubito-lateral", 3, "8-8-8"),
("BRACOS", "Flexão-de-tríceps", 3, "8-8-8"),
("PANTURRILHA", "Step",  3, "8-8-8"),
("BRACOS", "Prancha-tríceps",   3, "8-8-8"),
("BRACOS", "Tríceps-banco",  3, "8-8-8"),
("ABDOME", "Infra-na-paralela-",   3, "8-8-8"),
("OBLIQUIOS", "Prancha-lateral",   3, "8-8-8"),
("COSTAS", "Barra-fixa-com-pegada-aberta",  3, "8-8-8"),
("GLUTEOS", "Agachamento-Afundo-no-step:",   3, "8-8-8"),
("OBLIQUIOS", "Crunch-com-rotação-do-tronco-em-decubito-dorsal", 3, "8-8-8"),
("TRICEP", "Extensão-de-tríceps-deitado",   3, "8-8-8"),
("GLUTEOS", "Abdução-de-quadril-em-pé-na-polia-baixa",   3, "8-8-8"),
("BICEP", "Prancha-de-antebraço", 3, "8-8-8"),
("PANTURRILHA", "Panturrilha-em-pé", 3, "8-8-8"),
("GLUTEOS", "Stiff", 3, "8-8-8"),
("TRICEP", "Tríceps-coice",  3, "8-8-8"),
("COSTAS", "Remada-unilateral-com-halter-(rosca-serrote)", 3, "8-8-8"),
("PERNAS", "Stiff", 3, "8-8-8"),
("BRACOS", "Desenvolvimento-em-pé",   3, "8-8-8"),
("COSTAS", "Pullover-com-halter",  3, "8-8-8"),
("TRICEP", "Elevação-lateral-dos-braços",   3, "8-8-8"),
("ABDOME", "Prancha",  3, "8-8-8"),
("COSTAS", "Remada-baixa-sentada-no-pulley-com-triângulo.",   3, "8-8-8"),
("COSTAS", "Remada-em-pé-com-a-barra-T-(remada-cavalinho)",   3, "8-8-8"),
("PERNAS", "Coice", 3, "8-8-8"),
("ABDOME", "Abdominal-em-V", 3, "8-8-8"),
("TRICEP", "Flexão-de-braço-inclinada",  3, "8-8-8"),
("PANTURRILHA", "Panturrilha-isolada",  3, "8-8-8"),
("ABDOME", "Abdominal-com-perna-elevada",   3, "8-8-8"),
("BRACOS", "Elevação-lateral+adução-horizontal-de-ombros", 3, "8-8-8"),
("OBLIQUIOS", "Twist-com-bola", 3, "8-8-8"),
("PANTURRILHA", "Panturrilha-sentada",  3, "8-8-8"),
("OBLIQUIOS", "Prancha-facial-com-o-apoio-das-mãos-no-solo",  3, "8-8-8"),
("TRICEP", "Prancha-de-antebraço", 3, "8-8-8"),
("ABDOME", "Abdominal-com-elevação-do-quadril",   3, "8-8-8"),
("ABDOME", "Abdominal-lateral", 3, "8-8-8")
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
module.exports = class TreinoDao {

    constructor(bd) {
        this.bd = bd
    }

    verTreino() {
        return new Promise((resolve, reject) => {
            const query = "select * from TREINO"
            this.bd.all(query, (error, response) => {
                if (error) reject(`Erro ao acessar o banco de dados. ${error}`)
                else resolve(response)
            })
        })
    }

   
    Novotreino(params){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO TREINO (MUSCULO, EXERCICIO, SERIES, REPETICOES) VALUES (?, ?, ?, ?)'
            const parametros = [params[0], params[1], params[2], params[3]]
            this.bd.run(query,parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar Treino. ${error}`)
                else resolve('Treino Adicionado com sucesso')
            })
        })
    }

    DeleteTreino(id){
        return new Promise((resolve, reject)=>{
            const query = 'DELETE FROM TREINO WHERE ID = ?'
            this.bd.all(query, id, (error, response)=>{
                if(error) reject(`Erro ao deletar treino. ${error}`)
                else resolve('Treino excluido com sucesso')
            })
        })
    }

    EditTreino(params, id){
        return new Promise((resolve, reject)=>{
            const query = 'UPDATE TREINO SET MUSCULO = (?), EXERCICIO = (?), SERIES = (?), REPETICOES = (?) WHERE ID = (?)'
            const parametros = [params[0], params[1], params[2], params[3], id]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject (`Erro ao editar treino. ${error}`)
                else resolve ('Treino editado com sucesso')
            })
        })
    }
}

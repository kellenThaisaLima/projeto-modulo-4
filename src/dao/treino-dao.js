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
}

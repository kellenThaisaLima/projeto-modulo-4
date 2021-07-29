const TreinoDao = require('../dao/treino-dao');

module.exports = (app, bd) => {

    const daoTreino = new TreinoDao(bd)   
    

    app.get("/treino", async (req, res) => {
        try {
            let treino = await daoTreino.verTreino()
            res.json({
                result: treino                
            });

        } catch (e) {
            res.json({ error: e.message });
        }




    });


}
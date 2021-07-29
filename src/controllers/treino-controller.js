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

    app.post('/treino', async (res, resp)=>{
        try{
            const body = res.body
            const params = [body.MUSCULO, body.EXERCICIO, body.SERIES, body.REPETICOES]

            const respostaNovoTreino = await daoTreino.Novotreino(params)
            resp.send(respostaNovoTreino)

        }catch(error){
            resp.send(error)
        }
    })

    app.delete('/treino/delete/:ID', async(res, resp)=>{
        try{
            const id = res.params.ID

            const respostaDeleteTreino = await daoTreino.DeleteTreino(id)
            resp.send(respostaDeleteTreino)

        }catch(error){
            resp.send(error)
        }
    })

    app.put('/treino/edit/:ID', async(res, resp)=>{
        try{
            const body = res.body
            const params = [body.MUSCULO, body.EXERCICIO, body.SERIES, body.REPETICOES]

            const id = res.params.ID

            const respostaEditaTreino = await daoTreino.EditTreino(params, id)
            resp.send(respostaEditaTreino)

        }catch(error){
            resp.send(error)
        }
    })


}
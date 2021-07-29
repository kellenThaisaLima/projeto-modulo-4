const Express = require('express')
const cors = require('cors')
const bd =require('./src/infra/sqlite-bd')
const treinoController = require('./src/controllers/treino-controller')
const port = process.env.PORT
const app = Express()


app.use(cors())
app.use(Express.json())

treinoController(app, bd)

app.listen(port, ()=>console.log(`[INFO]Servidor rodando na porta: ${port}`))


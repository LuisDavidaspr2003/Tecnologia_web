const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const cliente = require('./routes/cliente')
const Etapas = require('./routes/Etapas')
const univercidades = require('./routes/univercidades')


// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/cliente', cliente)
app.use('/api/Etapas', Etapas)
app.use('/api/univercidades', univercidades)


module.exports = app
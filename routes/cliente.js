const { Router } = require('express')
const { createCliente,getCliente } =
 require('../controllers/cliente')

const router = Router()

// crear
router.post('/',createCliente)

// consultar todos
router.get('/',getCliente)

module.exports = router;
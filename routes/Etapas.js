const { Router } = require('express')
const { createEtapa,getEtapa } =
 require('../controllers/Etapas')

const router = Router()

// crear
router.post('/',createEtapa)

// consultar todos
router.get('/',getEtapa)

module.exports = router;
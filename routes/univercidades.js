const { Router } = require('express')
const { createUnivercidades,getUnivercidades } =
 require('../controllers/univercidades')

const router = Router()

// crear
router.post('/',createUnivercidades)

// consultar todos
router.get('/',getUnivercidades)

module.exports = router;
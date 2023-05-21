const { Router } = require('express')
const { createTipoProyecto,getTipoProyecto } =
 require('../controllers/tipoProyecto')

const router = Router()


router.post('/',createTipoProyecto)


router.get('/',getTipoProyecto)

module.exports = router;
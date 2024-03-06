import { Router } from 'express'  //importo router 
import { getRegistros, getRegistro, createRegistros, updateRegistros, deleteRegistros } from "../controllers/registros.controller.js"

const router = Router()  //instancio un enrutador a partir de router para definir grupo de rutas relacionadas.

router.get('/registros', getRegistros)
router.get('/registros/:id', getRegistro)
router.post('/registros', createRegistros)
router.patch('/registros/:id', updateRegistros) //Cuando actualice un registro puedo registrar un solo campo, no todos necesariamente.
router.delete('/registros/:id', deleteRegistros)

export default router  //lo exporto

//Cuando se visite la ruta '/registros, se ejecutará getRegistros, getRegistro, createRegistros.... etc
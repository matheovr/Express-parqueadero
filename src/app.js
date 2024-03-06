import express from 'express'
import registrosRoutes from './routes/registros.routes.js'

const app = express()

app.use(express.json())  //configuro para que express procese datos JSON en la solicitudes entrantes
app.use('/api', registrosRoutes)   // configuro para que express utilice las rutas definidas en registros.routes.js y comience por /api

app.listen(3000);  //La app recibe solicitudes entrantes en este puerto

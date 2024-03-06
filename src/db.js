import { createPool } from "mysql2/promise";

export const pool = createPool({   //la variable pool contendra el grupo de conexiones y otros archivos podran utilizarla
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'parqueadero'
})

console.log('Conexion a la base de datos establecida');
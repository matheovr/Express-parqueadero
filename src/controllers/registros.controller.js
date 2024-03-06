import { pool } from '../db.js'

export const getRegistros = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM registros')
    res.json(rows)
};

export const getRegistro = async (req, res) => {
    console.log(req.params.id)  //req.params.id, contiene los parametros de la URL en este caso el id que se solicita y se imprime.
    const [rows] = await pool.query('SELECT * FROM registros WHERE id = ?', [req.params.id])

    if (rows.length <= 0 ) return res.status(404).json({
        message: 'Registro no encontrado'
    })
    console.log(rows)
    res.json(rows[0])
};

export const createRegistros = async (req, res) => {    //Recibe los datos que una apliacion cliente le va a enviar
    const { placa, tipo } = req.body  // abreviación para extraer propiedades y no tener que acceder a req.body.placa, o req.body.tipo

    const[rows] = await pool.query('SELECT COUNT(*) as count FROM registros WHERE tipo = ?', [tipo])
    const count = rows[0].count

    if ((tipo === 'carro' && count >= 5 ) || (tipo === 'moto' && count >= 10)){
        return res.status(404).json({ 
            message: 'Limite de cupos alcanzados'
        })
    }
    const [result] = await pool.query('INSERT INTO registros (placa, tipo) VALUES (?, ?)',[placa, tipo])
    res.json({ 
        id : result.insertId,
        placa,
        tipo,
     })
};


export const deleteRegistros = async(req, res) => {
    const [result] = await pool.query('DELETE FROM registros WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0 ) return res.status(404).json({
        message: 'Registro no encontrado!'
    })

    res.send('Registro eliminado')
};

export const updateRegistros = async(req, res) => {  //Las llaves me indican que voy a recibir tanto req como res
    const {id} = req.params
    const {placa, tipo} = req.body

    const [result] = await pool.query('UPDATE registros SET placa = IFNULL(?, placa), tipo = IFNULL(?, tipo) WHERE id = ?', [placa, tipo, id])

    if (result.affectedRows === 0 ) return res.status(404).json({
        message: 'No existe esa fila!'
    })

    const [rows] = await pool.query('SELECT * FROM registros WHERE id = ?', [id])

    res.json(rows[0])

}




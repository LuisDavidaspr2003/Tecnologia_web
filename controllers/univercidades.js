const Univercidades = require('../models/univercidades')
const { request, response} = require('express')

// crear
const createUnivercidades = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
            const Direccion = req.body.Direccion
            const Telefono = req.body.Telefono
        const univercidadesDB = await Univercidades.findOne({nombre})//select * from univercidad where nombre=?
        
        if(univercidadesDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,Direccion,Telefono  // nombre: nombre
        }
        const univercidades = new Univercidades(data)
        console.log(univercidades)
        await univercidades.save()
        return res.status(201).json(univercidades)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//TODO
const getUnivercidades = async (req = request, 
    res = response) => {
        try{
            
            const univercidadesDB = await Univercidades.find()//select * from univercidad where estado=?
            return res.json(univercidadesDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


const updateUnivercidadesByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const univercidades = await Univercidades.findByIdAndUpdate(id, data, {new: true})
        return res.json(univercidades)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createUnivercidades, 
    getUnivercidades, 
    updateUnivercidadesByID
}

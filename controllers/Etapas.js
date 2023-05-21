const Etapa = require('../models/Etapas')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
            const anteproyecto = req.body.anteproyecto
            const Entrega_parcial_1 = req.body.Entrega_parcial_1
            const Entrega_parcial_2 = req.body.Entrega_parcial_2
            const Entrega_Final = req.body.Entrega_Final
        const EtapasDB = await Etapa.findOne({nombre})//select * from etapas where nombre=?
        
        if(EtapasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,anteproyecto,Entrega_parcial_1,Entrega_parcial_2,Entrega_Final  
        }
        const Etapas = new Etapa(data)
        console.log(Etapas)
        await Etapas.save()
        return res.status(201).json(Etapas)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//TODO
const getEtapa = async (req = request, 
    res = response) => {
        try{
            
            const EtapasDB = await Etapa.find()//select * from etapa where estado=?
            return res.json(EtapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateEtapaByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
       
        data.fechaActualizacion = new Date()
        console.log(data)
        const Etapas = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.json(Etapas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createEtapa, 
    getEtapa, 
    updateEtapaByID
}
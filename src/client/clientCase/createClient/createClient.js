const {response} = require('express');

const clientRepository = require('../../../repositories/clientRepository');

const createClient = async (req, res = response) => {
    try {
        console.log(req.body)
        await clientRepository.save(req.body);

        return res.status(201).json(
            {
                message: "El cliente se ha creado correctamente"
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Error interno del servidor",
            err: error
        })
    }
}

module.exports = { createClient }
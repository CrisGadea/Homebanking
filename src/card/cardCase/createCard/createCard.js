const {response} = require('express');

const cardRepository = require('../../../repositories/cardRepository');

const createCard = async (req, res = response) => {
    try {
        console.log(req.body)
        await cardRepository.save(req.body);

        return res.status(201).json(
            {
                message: "La tarjeta se ha creado correctamente"
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

module.exports = { createCard }
const {response} = require('express');

const transactionRepository = require('../../../repositories/transactionRepository');

const createTransaction = async (req, res = response) => {
    try {
        await transactionRepository.save(req.body);

        return res.status(200).json({
            message: "La transaccion se ha realizado satisfactoriamente"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error interno de servidor",
            err: error
        })
    }
}

module.exports = {
    createTransaction
}
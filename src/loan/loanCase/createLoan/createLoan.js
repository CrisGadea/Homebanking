const {response} = require('express');

const loanRepository = require('../../../repositories/loanRepository');

const createLoan = async (req, res = response) => {
    try {
        console.log(req.body)
        await loanRepository.save(req.body);

        return res.status(201).json(
            {
                message: "El Loan se ha generado correctamente"
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

module.exports = { createLoan }
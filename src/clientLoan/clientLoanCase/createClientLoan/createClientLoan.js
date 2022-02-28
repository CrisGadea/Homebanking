const {response} = require('express');

const clientLoanRepository = require('../../../repositories/clientLoanRepository');

const createClientLoan = async (req, res = response) => {
    try {
        console.log(req.body)
        await clientLoanRepository.save(req.body);

        return res.status(201).json(
            {
                message: "El Client Loan se ha generado correctamente"
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

module.exports = { createClientLoan }
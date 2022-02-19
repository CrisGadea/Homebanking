const {response} = require('express');

const accountRepository = require('../../../repositories/accountRepository');

const createAccount = async (req, res = response) => {
    try {
        await accountRepository.save(req.body);

        return res.status(200).json({
            message: "La cuenta se ha creado satisfactoriamente"
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
    createAccount
}

import proprietariosService from "../services/proprietarios.service.js"

async function createProprietariosController(req, res, next) {
    try {
        let proprietario = req.body

        if (!proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome e telefone são obrigatórios")
        }
        res.send(await proprietariosService.createProprietarioService(proprietario))
        logger.info(`POST / Proprietarios = ${JSON.stringify(proprietario)}`)

    } catch (err) {
        next(err)
    }
}

async function getProprietariosController(req, res, next) {
    try {
        res.send(await proprietariosService.getProprietariosService())
        logger.info("GET / Proprietarios")
    } catch (err) {
        next(err)

    }
}

async function getProprietarioController(req, res, next) {
    try {
        const id = req.params.id
        res.send(await proprietariosService.getProprietarioService(id))
        logger.info(`GET / Proprietario ID = ${id}`)

    } catch (err) {
        next(err)

    }
}

async function updateProprietarioController(req, res, next) {
    try {
        let proprietario = req.body

        if (!proprietario.proprietarioId || !proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome, ID e telefone são obrigatórios")
        }
        res.send(await proprietariosService.updateProprietarioService(proprietario))
        logger.info(`PUT / Proprietarios = ${JSON.stringify(proprietario)}`)

    } catch (err) {
        next(err)
    }
}

async function deleteProprietarioController(req, res, next) {
    try {
        const id = req.params.id
        await proprietariosService.deleteProprietarioService(id)
        res.end()
        logger.info(`DELETE / Proprietario ID = ${id}`)

    } catch (err) {
        next(err)
    }
}


export default {
    createProprietariosController,
    getProprietariosController,
    getProprietarioController,
    deleteProprietarioController,
    updateProprietarioController
}

import animaisService from "../services/animais.service.js"

async function createAnimalsController(req, res, next) {
    try {
        let animal = req.body

        if (!animal.nome || !animal.tipo || !animal.proprietarioId ) {
            throw new Error("Nome, tipo e proprietário do animal são obrigatórios")
        }
        res.send(await animaisService.createAnimalService(animal))
        logger.info(`POST / Animais = ${JSON.stringify(animal)}`)

    } catch (err) {
        next(err)
    }
}

async function getAnimaisController(req, res, next) {
    try {
        res.send(await animaisService.getAnimaisService(req.query.proprietario_id))
        logger.info("GET / Animais")
    } catch (err) {
        next(err)

    }
}

async function getAnimalController(req, res, next) {
    try {
        const id = req.params.id
        res.send(await animaisService.getAnimalService(id))
        logger.info(`GET / Animal ID = ${id}`)

    } catch (err) {
        next(err)

    }
}

async function updateAnimalController(req, res, next) {
    try {
        let animal = req.body
        
        if (!animal.nome || !animal.tipo || !animal.proprietarioId ) {
            throw new Error("Nome, tipo e proprietário do animal são obrigatórios")
        }
        res.send(await animaisService.updateAnimalService(animal))
        logger.info(`PUT / Animals = ${JSON.stringify(animal)}`)

    } catch (err) {
        next(err)
    }
}

async function deleteAnimalController(req, res, next) {
    try {
        const id = req.params.id
        await animaisService.deleteAnimalService(id)
        res.end()
        logger.info(`DELETE / Animal ID = ${id}`)

    } catch (err) {
        next(err)
    }
}





export default {
    createAnimalsController,
    getAnimaisController,
    getAnimalController,
    deleteAnimalController,
    updateAnimalController
}
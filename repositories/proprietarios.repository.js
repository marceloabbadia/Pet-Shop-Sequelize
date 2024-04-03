import Proprietarios from "../models/proprietarios.model.js"

async function insertProprietarioRepository(proprietario) {

    try {
        return await Proprietarios.create(proprietario)
    } catch (err) {
        throw err
    }
}

async function getProprietariosRepository() {
    try {
        return await Proprietarios.findAll()
    } catch (err) {
        throw err
    }
}

async function getProprietarioRepository(id) {
    try {
        return await Proprietarios.findByPk(id)
    } catch (err) {
        throw err
    }
}

async function updateProprietariosRepository(proprietario) {
    try {
        await Proprietarios.update(proprietario, {
            where: {
                proprietarioId: proprietario.proprietarioId
            }
        })
        return await getProprietarioRepository(proprietario.proprietarioId)
    } catch (err) {
        throw err
    }
}


async function deleteProprietarioRepository(id) {
    try {
        await Proprietarios.destroy({
            where: {
                proprietarioId: id
            }
        })
    } catch (err) {
        throw err
    }
}


export default {
    insertProprietarioRepository,
    getProprietariosRepository,
    getProprietarioRepository,
    updateProprietariosRepository,
    deleteProprietarioRepository



}
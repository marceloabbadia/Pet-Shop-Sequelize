import { where } from "sequelize"
import Animais from "../models/animais.model.js"


async function insertAnimalRepository(animal) {
    try {
        return await Animais.create(animal)       
    } catch (err) {
        throw err
    }
}

async function getAnimaisRepository() {
    try {
        return await Animais.findAll() 
    } catch (err) {
        throw err
    } 
}

async function getAnimalRepository(id) {

    try {
        return await Animais.findByPk (id)
    } catch (err) {
        throw err
    } 
}

async function getProprietarioAnimalRepository(proprietarioId) {
    try {
        return await Animais.findAll({
            where: {
                proprietarioId: proprietarioId
            }
        })
    } catch (err) {
        throw err
    }
}

async function updateAnimalsRepository(animal) {
    try {
        await Animais.update(animal, {
            where: {
                animalId: animal.animalId
            }
        })
        return await getAnimalRepository(animal.animalId)


    } catch (err) {
        throw err
    } 
}


async function deleteAnimalRepository(id) {
    try {
        await Animais.destroy({
            where: {
                animalId: id
            }
        })
    } catch (err) {
        throw err
    } 
}

export default {
    insertAnimalRepository,
    getAnimaisRepository,
    getAnimalRepository,
    updateAnimalsRepository,
    deleteAnimalRepository,
    getProprietarioAnimalRepository



}
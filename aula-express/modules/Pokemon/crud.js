'use strict'
const PokemonModel = require('./model')
const Controller = require('./controller')

const CRUD = {
    create: (req, res) => {
        let mod = req.body
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        let obj = {
          mod,
          callback
        }
        Controller.create(mod, callback)
    },

    find: (req, res) => {
        let query = {}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.find(query, callback)
    },

    findOne: (req, res) => {
        let query = {_id: req.params.id}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.find(query, callback)
    },

    update: (req, res) => {
        let query = {_id: req.params.id}
        let mod = req.body
        PokemonModel.update(query, mod, function (err, data) {
            if (err) throw new Error(err)
            res.json(data)
        })
    },

    remove: (req, res) => {
        let query = {_id: req.params.id}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.remove(query)
    }
}


module.exports = CRUD

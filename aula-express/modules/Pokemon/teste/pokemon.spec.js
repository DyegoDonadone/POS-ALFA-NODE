require('./../../../db/config')
const assert = require('assert')
const Controller = require('./../controller')

describe('Pokemon', () => {

  before((done) => {
    Controller.remove({}, (err, data) => done())
  })

  describe('Quando iniciamos sem pokémons a lista deve vir vazia', () => {
    it('Deve retornar um Array vazio', (done) => {
      let query = {}
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(0, data.length, 'Lista não veio vazia')
        done()
      }
      Controller.find(query, callback)
    })
  })

  describe('Create', () => {
    it('No Create o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) => {
      let mod = {
        name: 'Teste',
        attack: 8000,
        defense: 666
      }
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal('object', typeof data._id)
        assert.equal('Teste', data.name)
        assert.equal(8000, data.attack)
        assert.equal(666, data.defense)
        done()
      }
      Controller.create(mod, callback)
    })
  })

  describe('Update', () => {
    it('No Update o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) => {
      let mod = {
        name: 'Teste 2',
        attack: 1000,
        defense: 500
      }
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(1, data.ok, 'Alterado')
        done()
      }
      Controller.update(mod, callback)
    })
  })

  describe('Delete', () => {
    it('No Delete o retorno deve ser o mesmo que a lista zero', (done) => {
      let query = {}
      let callback = (err, data) => {

      	console.log(data.result)

        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(1, data.result.ok, 'Lista não veio vazia')
        done()
      }
      Controller.remove(query, callback)
    })
  })
  describe('Quando iniciamos sem pokémons a lista deve vir vazia', () => {
    it('Deve retornar um Array vazio', (done) => {
      let query = {}
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(0, data.length, 'Lista não veio vazia')
        done()
      }
      Controller.findOne(query, callback)
    })
  })

})

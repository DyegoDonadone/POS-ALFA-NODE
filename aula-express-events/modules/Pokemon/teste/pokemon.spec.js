require('./../../../db/config.teste')
const assert = require('assert')

Controller = require('./../crud')

describe('Pokemon module', () =>{
	before( function(done){
		Controller.remove({}, (err, data) => done())
	});

	var msg1 = 'Iniciar se pokemon';
	describe( msg1, () => {
		it ('Deve retornar array vazio', (done) => {
			var query = {}
			
			var callback = (err, data) => {
				assert.equal(null, err, 'Erro nao e nulo')
				assert.equal(0, data.length, 'Lista veio vazia')
				done()
			}
			Controller.find(query, callback)
		})
	})
	var msg2 = 'Create';
	describe( msg1, () => {
		it ('Quando cadastrado o retorno deve ser o mesmo objeto _id', (done) => {
			var mod = {
				name: 'Teste',
				attack: 9000,
				defense: 8000
			}
			
			var callback = (err, data) => {
				//assert.equal(mod, data, 'Cadastro Correto')
				assert.equal('object', typeof data._id)
				done()
			}
			Controller.create(query, callback)
		})
	})
})
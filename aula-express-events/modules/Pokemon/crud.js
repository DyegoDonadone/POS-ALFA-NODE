
//const PokemonModel = require('./model');
const Controller = require('./controller');

var events = require('events');

var eventEmitter = new events.EventEmitter();

const CRUD = {
	create: function(req,res) {
	var mod = req.body
		var cb = function(err, data){
			if(err) throw new Error(err)
				res.json(data)
			}

		var obj = {
			mod: mod,
			callbeck: callbeck 
		}
		eventEmitter.emit('crud:create',);
		Controller.create(mod, cb)
	},

	// delete: function(req,res){
	// query = {_id:req.params.id};
	// 		PokemonModel.remove(query, function (err, data) {
	// 			if (err) return console.log('ERRO: ', err);
	// 			//return console.log('Buscou:', data);
	// 			  res.json(data);
	// 		})
	// },
	// update: function(req,res){
	// 	query = {_id:req.params.id};
	// 	var mod = req.body
	// 	PokemonModel.update(query, mod, function (err, data) {
	// 		if (err) return console.log('ERRO: ', err);
	// 		//return console.log('Buscou:', data);
	// 		  res.json(data);
	// 	})
	// },
	// findOne: function(req,res){
	// 	query = {_id:req.params.id};
	// 	PokemonModel.findOne(query, function (err, data) {
	// 		if (err) return console.log('ERRO: ', err);
	// 		//return console.log('Buscou:', data);
	// 		  res.json(data);
	// 	})
	// },
	find: function(req,res){
		query = {}
		var cb = function(err, data){
			if(err) throw new Error(err)
				res.json(data)
			}
		CRUD.find(query, cb)
	}

}

module.exports = CRUD
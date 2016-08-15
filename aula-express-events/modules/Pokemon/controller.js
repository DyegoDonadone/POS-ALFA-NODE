const Model = require('./model');

var events = require('events');

var eventEmitter = new events.EventEmitter();
s
eventEmitter.on('crud: create', cbCrudCreate);

const Controller = {
  create: function(data,callback) {
    const model = new Model(data);
    model.save(callback);
  },
  find: function(query,callback) {
    Model.find(query,callback);
  },
  update: function(query, mod, options) {
    options = options || {};
    Model.update(query, mod, options, function (err, data) {
      if (err) {
        return console.log('ERRO: ', err);
      }
      return console.log('Alterou:', data);
    });
  },
  delete: function(query) {
    Model.remove(query, function (err, data) {
      if (err)  { 
        return console.log('ERRO: ', err);
      }
      return console.log('Deletou:', data);
    });
  },
};

module.exports = Controller;
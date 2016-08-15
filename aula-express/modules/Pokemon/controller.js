'use strict';

const Model = require('./model');

const Controller = {
  create: function(data, callback) {
    Model.create(data, callback);
  },

  find: function(query, callback) {
    Model.find(query,callback);
  },
  findOne: function(query, callback) {
    Model.findOne(query,callback);
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

  remove: function(query, callback) {
    Model.remove(query, callback);
  },
};

module.exports = Controller;

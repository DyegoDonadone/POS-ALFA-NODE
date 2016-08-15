const express = require('express');
const router = express.Router();
const CRUD = require('./crud');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
	Controller.find(req, res)		
});
router.get('/:id', function(req, res, next) {
	Controller.findOne(req, res)		

});
router.put('/:id', function(req, res, next) {
	Controller.update(req,res)
});
router.delete('/:id', function(req, res, next) {
	Controller.delete(req,res)
});
router.put('/',function(req, res, next) {
	Controller.create(req,res)
});*/

router.get('/', CRUD.find)
// router.get('/:id', Controller.findOne)
router.post('/', CRUD.create)
// router.put('/:id', Controller.update)
// router.delete('/:id', function(req, res, next){
// 	Controller.remove(req,res)
// })

module.exports = router;

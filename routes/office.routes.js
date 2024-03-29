const offices = require('../controllers/office.controller.js');
const router = require('express').Router();

module.exports = (app) => {
  router.post('/', offices.create);
  router.get('/', offices.findAll);
  router.get('/:id', offices.findOne);
  router.put('/:id', offices.update);
  router.delete('/:id', offices.delete);
  app.use('/api/offices', router);
};

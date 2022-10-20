const {Router} = require('express');
const {heroController} = require('../controllers')


const heroRouter = Router();

heroRouter.route('/').get()

module.exports = heroRouter;
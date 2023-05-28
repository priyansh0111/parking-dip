const router = require('express').Router()
const checkPlate = require('../controllers/checkPlate')
const logController = require('../controllers/logController');

router.get("/insert", logController.getInsertLog);

module.exports = router
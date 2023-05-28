const router = require('express').Router()
const checkPlate = require('../controllers/checkPlate')

router.get("/check", checkPlate.getCheckPlate)
router.post("/check", checkPlate.checkPlate)
router.post("/insert", checkPlate.insertData)
router.get("/search", checkPlate.getSearchData)

module.exports = router
const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.get("/login", loginController.getLoginUser)
router.post("/login", loginController.loginUser)
router.post("/register", loginController.enterDetails)

module.exports = router
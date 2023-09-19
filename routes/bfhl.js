const router = require("express").Router();
const controller = require("../controllers/routeController")

router.route("/").get(controller.bfhlGet);

router.route("/").post(controller.bfhlPost);

module.exports = router
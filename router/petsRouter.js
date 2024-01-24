const exp = require("express");
const router = exp.Router();

const petsController =require("../controller/petsController");

router.get("/getAll",petsController.getData);
router.post("/add",petsController.postData);

module.exports = router;
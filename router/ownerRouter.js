const exp = require("express");
const router = exp.Router();

const ownersContoller =require("../controller/ownersController");

router.get("/getAll",ownersContoller.getData);
router.post("/add",ownersContoller.postData);

module.exports = router;
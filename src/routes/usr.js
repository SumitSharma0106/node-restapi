const router=require("express").Router();
const usrController=require("../controller/UsrController");
// const jsoParser=bodyParser.json();

router.post("/",usrController.usr_add);
router.get("/",usrController.usr_all);
router.get("/:usrId",usrController.usr_one);
router.put("/:usrId");
router.delete("/:usrId");

module.exports=router;

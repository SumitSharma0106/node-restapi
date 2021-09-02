const router=require("express").Router();
const usrController=require("../controller/UsrController");

router.post("/");
router.get("/",usrController.usr_all);
router.get("/:usrId");
router.put("/:usrId");
router.delete("/:usrId");

module.exports=router;
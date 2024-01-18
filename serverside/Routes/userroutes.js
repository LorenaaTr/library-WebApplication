const express = require('express');
const router = express.Router();

const usercontroller = require("../Controllers/usercontroller");

router.post("/userdata", usercontroller.userData);
router.put("/updateUserPass/:id", usercontroller.updatePasswordById);
router.put("/updateUsername/:id", usercontroller.updateUsernameById);
router.put("/updateName/:id", usercontroller.updateNameById);
router.put("/updateSurname/:id", usercontroller.updateSurnameById);
router.put("/updateBirthday/:id", usercontroller.updateBirthdayById);
router.put("/updateCity/:id", usercontroller.updateCityById);
router.put("/updateEmail/:id", usercontroller.updateEmailById);
router.get("/usercount", usercontroller.countUsers);
router.get("/getusers", usercontroller.getUsers);
router.get("/getUserByid/:id", usercontroller.getuserbyid);
router.delete("/deleteuser/:id", usercontroller.deleteuserbyid);
router.put("/updateuser/:id", usercontroller.updateUserbyid);
router.post("/userbook", usercontroller.userbook);
router.get("/getuserbooks/:user", usercontroller.getUserBooks);
router.delete("/deleteuserbook/:id" , usercontroller.deleteuserbook);

module.exports = router;
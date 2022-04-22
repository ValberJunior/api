const express = require("express");
const studentController = require("../controllers/studentControler");
const router = express.Router();

//get
router.get("/alunos", studentController.all);

router.get("/alunos/:id", studentController.getForParams);

//put or patch
router.patch("/alunos", studentController.update);

//post
router.post("/novo", studentController.create)

//delete
router.delete("/alunos", studentController.delete);

module.exports = router;
const express = require("express");
const router = express.Router();



const mailControllers = require("../controllers/mail");

router.get("/",  mailControllers.getMails);
router.get("/:mailId",  mailControllers.getMail);
router.delete("/:mailId", mailControllers.deleteMail);

router.post("/", mailControllers.postMail);
module.exports = router;

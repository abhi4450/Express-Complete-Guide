// const path = require("path");
const express = require("express");
// const rootDir = require("../util/path");

const contactusController = require("../controllers/contact");

const router = express.Router();

router.get("/contactus", contactusController.getContactForm);

router.post("/sucess", contactusController.postSuccessMsg);

module.exports = router;

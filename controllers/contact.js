const path = require("path");
const rootDir = require("../util/path");

exports.getContactForm = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postSuccessMsg = (req, res, next) => {
  console.log(req.body);
  res.send("<h1>Form successfully filled</h1>");
};

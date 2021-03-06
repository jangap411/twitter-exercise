const { Router } = require("express");
const router = Router();

let data = {
  message: "",
};

let newsFeedData = {
  tweetData: "",
  userid: "",
};

//#region ALL THE GET ROUTES

//index
router.get("/", (req, res) => {
  console.info("\n........... GET:/index.................\n");
  data.message = "";
  res.status(200).render("index", data);
});

//create account page
router.get("/signup", (req, res) => {
  console.info("\n........... GET:/signup.................\n");
  data.message = "";
  res.statusCode = 200;
  res.status(200).render("pages/index");
});

//home page
router.get("/home", (req, res) => {
  console.info("\n........... GET:/home.................\n");
  data.message = "";
  res.status(200).render("pages/home", newsFeedData);
});

function getUserID(res) {
  console.info("\n........... GET:/home.................\n");
  data.message = "";
  res.status(200).render("pages/home", newsFeedData);
}

//#endregion

module.exports = router;

const express = require("express");
const router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check } = require("express-validator");
router.post(
  "/signup",
  [
    check("name", "should be more than 3 letter").isLength({ min: 3 }),
    check("email", "email required").isEmail(),
    check("password", "need more chars").isLength({ min: 5 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email required").isEmail(),
    check("password", "password field required").isLength({ min: 5 }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;

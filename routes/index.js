const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const imageController = require("../controllers/imageController");
const upload = require("../middleware/multer");


router.post("/auth/signup", authController.signup);
router.post("/auth/signin", authController.signin);
router.post("/auth/signout", (req, res) =>
  res.status(200).json({ message: "User signed out" })
);

router.get("/images/:id", imageController.getImageById);
router.use(authController.verifyToken);

router.post("/images", upload.single("image"), imageController.uploadImage);
router.get("/images", imageController.getAllImages);


module.exports = router;

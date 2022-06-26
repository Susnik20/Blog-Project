const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");
const blogController = require("../controller/blogController");
const auth = require("../middleware/auth");

router.get("/blogging", function (req, res) {
  res.send("Blogging  Api  Strated");
});
router.post("/login", authorController.loginUser);

router.post("/authors",  authorController.createAuthors);
router.post(
  "/createBlog",
  auth.checkFor,
  auth.authenticate,
  blogController.createBlog
);
router.get("/blogs", auth.authenticate, blogController.getBlogs);

router.put(
  "/blog/:blogId",
  auth.authenticate,
  auth.authorise,
  blogController.updateblog
);
router.delete(
  "/blog/:blogId",
  auth.authenticate,
  auth.authorise,
  blogController.deleteBlog
);
router.delete("/blog", blogController.deleteBlogByQuery);

module.exports = router;

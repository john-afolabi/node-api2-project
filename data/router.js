const express = require("express");

const {
  find,
  findById,
  insert,
  update,
  remove,
  findPostComments,
  findCommentById,
  insertComment
} = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
  find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  findById(id)
    .then(posts => {
      if (posts.length) {
        res.status(200).json(posts[0]);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

module.exports = router;

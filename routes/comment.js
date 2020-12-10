const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const commentController = require('../controllers/commentController');

//GET request for comment just for tests
router.get('/:commentId', (req, res) => {
  res.json({ msg: 'hello from post ' + req.params.postId + ' and comment ' + req.params.commentId + ', ' + req.user.username })
})

//POST request for new comment
router.post('/newComment',{headers: {
  'Access-Control-Allow-Headers':'Content-Type',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:8080',
  'Vary':'Origin'
}}, commentController.commentPost)

//PUT request for comment
router.put('/:commentId', commentController.commentUpdate)

//DELETE request for comment
router.delete('/:commentId', commentController.commentDelete)

module.exports = router;
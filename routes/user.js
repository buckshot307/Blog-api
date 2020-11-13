var express = require('express');
var router = express.Router();

//User page
router.get('/user', (req, res) => {
  return res.send('GET HTTP method on user resource');
});
 
router.post('/user', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
 
router.put('/user', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});
 
router.delete('/user', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});

//Users list ?maybe?
router.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

module.exports = router;
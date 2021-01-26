var express = require('express');
var router = express.Router();
const conn = require("../connections")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res)=> {
  conn.user.create({ email: req.body.email, password: req.body.password }, () => {
    res.send({message:"sucessfull created"})
  })
})

router.post('/register', (req, res) => {
  conn.user.create({
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    username: req.body.username
  }, () => {
    res.send({message:"sucessfull created"})
  })
})

module.exports = router;

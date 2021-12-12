var express = require('express');
var router = express.Router();
var { cars,dummyLogins } = require('./demo.js');

router.get('/login',(req,res)=>{
  res.render('login');
})

router.post('/', (req,res)=>{
  if(dummyLogins.email===req.body.email && dummyLogins.password===req.body.password){
    req.session.user = req.body;
    res.render('index',{cars});
  }
  else {
    var valid="Enter correct username or password"
    res.render('login',{valid})
  }
})

router.get('/', function(req, res) {
  if(!req.session.user){
    res.render('login');
  }else{
    res.render('index', {cars});
  }
});

router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/login')
})


module.exports = router;
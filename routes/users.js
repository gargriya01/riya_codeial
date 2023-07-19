// const express = require('express');
// const router = express.Router();

// const usersController = require('../controllers/users_controller');

// router.get('/profile', usersController.profile);

// router.get('/sign-up' , usersController.signUp);
// router.get('/sign-in' , usersController.signIn);

// router.post('/create', usersController.create);

// module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile', passport.checkAuthentication,usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);
// this is manual way
// router.post('/create-session', usersController.createSession);

router.post('/create-session',passport.authenticate(
    'local' , 
    {failureRedirect: '/users/sign-in'},   
), usersController.createSession);

router.get('/sign-out',usersController.destroySession);

module.exports = router;
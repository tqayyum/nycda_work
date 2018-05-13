var express = require('express');
var router = express.Router();

module.exports = function(passport) {
    // POST /users/signup
    router.post('/signup', (req, res) => {
        res.json({user: req.user}) // <<-- passport will add this to the req
    });

    // POST /user/login
    router.post('/login',  passport.authenticate('local-login'), (req, res) => {
            res.json({user: req.user})
    });

    return router;
};
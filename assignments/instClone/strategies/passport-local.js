var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;
var bcrypt = require('bcrypt');

function processSignupCallback(req, email, password, done) {
    User.findOne({
            where: {
                'email': email
            },
            attributes: ['id']
        })
        .then( (user) => {
            if (user) {
                return done(null, false);
            } else {
                var userToCreate = req.body;

                bcrypt.hash(userToCreate.password, 10, (err, hash) => {
                    userToCreate.password = hash;
                    User.create(userToCreate)
                        .then( (createdRecord) => {
                            createdRecord.password = undefined;
                            return done(null, createdRecord);
                        });
                });
            }
        });
}

function processLoginCallback(email, password, done) {
    User.findOne({
        where: {
            'email' :  email
        }
    })
    .then((user) => {
        if (!user) {
            return done(null, false)
        }
        // make sure the password they provided matches what we have
        // (think about this one, before moving forward)
        bcrypt.compare(password, user.password, (err, result) => {
            user.password = undefined;
            return result ? done(null, user) : done(null, err);
        });
    });
}

module.exports = (passport) => {
    passport.serializeUser( (user, done) => {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, processSignupCallback)); // <<-- more on this to come

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    }, processLoginCallback));
};

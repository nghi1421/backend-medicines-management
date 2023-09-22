const passport = require('passport');
const authenticateService = require('../services/authenticateService');

const handlePassport = () => {
    const JwtStrategy = require('passport-jwt').Strategy
    const ExtractJwt = require('passport-jwt').ExtractJwt;
    let opts = {}

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_SECRET_KEY;

    passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
        if (resultLogin && resultLogin.code === 0) {
            return done(null, resultLogin.data);
        }
        else {
            return done(null, resultLogin.errorMessage);
        }
    }));

}

module.exports = handlePassport
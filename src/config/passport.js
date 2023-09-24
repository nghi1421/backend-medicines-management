const passportJWT = require('passport-jwt')
const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const passport = require('passport')
const userService = require('../services/userService')
const LocalStrategy = passport.LocalStrategy

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
};

const strategy = new JwtStrategy(jwtOptions, function (jwtPayload, next) {
    const user = userService.findUserById(jwtPayload.id);

    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

passport.use(strategy);

module.exports = (app) => {
    app.use(passport.initialize());
}

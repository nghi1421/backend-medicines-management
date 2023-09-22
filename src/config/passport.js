const passportJWT = require('passport-jwt')
const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const passport = require('passport')
const userService = require('../services/userService')

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY
};

const strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    const user = userService.findUserById(jwt_payload.id);

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

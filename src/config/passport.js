const JwtStrategy = require('passport-jwt').Strategy
const passport = require('passport')
const userService = require('../services/userService')

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

const BaseRouter = require("./base/BaseRouter");

const userRouter = new BaseRouter("/user", UserController);

userRouter.mergeRoutes({
    "/signup": {
        post: [
            UserController.signup
        ]
    },
    "/login": {
        post: [
            UserController.login
        ]
    },
    "/me": {
        get: [
            bearerAuth,
            UserController.me
        ]
    },
    "/logout": {
        get: [
            UserController.logout
        ]
    },
    "/auth/google": {
        get: [
            googleAuth
        ]
    },
    "/auth/google/callback": {
        get: [
            googleAuth,
            UserController.token
        ]
    }
});

userRouter.register();

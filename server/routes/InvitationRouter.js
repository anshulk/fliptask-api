const BaseRouter = require("./base/BaseRouter");

const invitationRouter = new BaseRouter("/invitation", InvitationController);

invitationRouter.mergeRoutes({
    "/invite": {
        post: [
            bearerAuth,
            InvitationController.invite
        ]
    },
    "/details": {
        get: [
            InvitationController.details
        ]
    },
    "/resolve": {
        post: [
            bearerAuth,
            InvitationController.resolve
        ]
    }
});

invitationRouter.register();

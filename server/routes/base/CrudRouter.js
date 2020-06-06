const BaseRouter = require("./BaseRouter");

class CrudRouter extends BaseRouter {
    constructor(basePath, controller) {
        super(basePath, controller);

        this.mergeRoutes({
            "/": {
                get: [
                    bearerAuth,
                    this.controller.list
                ],
                post: [
                    bearerAuth,
                    this.controller.create
                ]
            },
            "/:id": {
                get: [
                    bearerAuth,
                    this.controller.get
                ],
                patch: [
                    bearerAuth,
                    this.controller.update
                ],
                delete: [
                    bearerAuth,
                    this.controller.delete
                ]
            }
        });
    }
}

module.exports = CrudRouter;

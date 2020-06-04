class CrudRouter {
    constructor(basePath, controller) {
        this.basePath = basePath;
        this.controller = controller;

        this.routes = {
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
        };
    }

    mergeRoutes = async (routes) => {
        this.routes = {
            ...routes,
            ...this.routes
        }
    }

    register = async () => {
        for (const endpoint in this.routes) {
            for (const method in this.routes[endpoint]) {
                expressApp[method](this.basePath+endpoint, this.routes[endpoint][method]);
            }
        }
    }
}

module.exports = CrudRouter;
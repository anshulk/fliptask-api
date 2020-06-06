class BaseRouter {
    constructor(basePath, controller) {
        this.basePath = basePath;
        this.controller = controller;
        this.routes = {};
    }

    mergeRoutes = async (routes) => {
        this.routes = {
            ...routes,
            ...this.routes
        }
    }

    register = async () => {
        // console.log(`Registering routes at path ${this.basePath}`);
        // console.log("Routes", this.routes);
        for (const endpoint in this.routes) {
            for (const method in this.routes[endpoint]) {
                try {
                    expressApp[method](this.basePath + endpoint, this.routes[endpoint][method]);
                } catch (error) {
                    console.log(`Error registring route ${method} ${this.basePath} ${this.routes[endpoint][method]}`);
                    console.log("Routes", this.routes);
                }
            }
        }
    }
}

module.exports = BaseRouter;

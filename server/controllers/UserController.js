const BaseController = require("./base/BaseController");
const Response = require("./base/Response");

class UserController extends BaseController {
    signup = async (req, res, next) => {
        try {
            const data = await this.service.signup(req.body);
            Response.success(res, data, 201);
        } catch (error) {
            Response.error(res, error);
        }
    }

    me = async (req, res, next) => {
        try {
            const data = await this.service.get(req.user.id, req.query);
            Response.success(res, data);
        } catch (error) {
            Response.error(res, error);
        }
    }

    token = async (req, res, next) => {
        try {
            const data = await this.service.token(req.user);
            Response.success(res, data);
        } catch (error) {
            Response.error(res, error, 403);
        }
    }

    login = async (req, res, next) => {
        try {
            const data = await this.service.login(req.body);
            Response.success(res, data);
        } catch (error) {
            Response.error(res, error, 403);
        }
    }

    logout = async (req, res, next) => {
        try {
            const data = await this.service.logout(req);
            Response.success(res, data);
        } catch (error) {
            Response.error(res, error);
        }
    }

    update = async (req, res, next) => {
        try {
            const data = await this.service.update(req.user, req.body);
            Response.success(res, data);
        } catch (error) {
            Response.error(res, error);
        }
    }
}

global.UserController = new UserController(UserService);

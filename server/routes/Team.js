module.exports = [
    {
        path: "/create",
        type: "POST",
        handlers: ["Auth.authenticate", "TeamController.create"]
    }
];

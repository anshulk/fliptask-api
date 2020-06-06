const Sequelize = require("sequelize");
const sequelize = require("../database");

const Workspace = sequelize.define("workspace", {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "Name is required."
            }
        }
    },
    isPrivate: Sequelize.BOOLEAN
}, {
    paranoid: true,
    underscored: true,
    freezeTableName: true
});

Workspace.belongsTo(User, { foreignKey: "createdBy" });
User.hasMany(Workspace);

Workspace.belongsTo(Organisation);
Organisation.hasMany(Workspace);

Workspace.belongsTo(Team);
Team.hasMany(Workspace);

global.Workspace = Workspace;

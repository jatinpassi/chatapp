const conn = require('./db-config');

module.exports = {
    user:  conn.model("User",require("./schemas/user-schema"))
};
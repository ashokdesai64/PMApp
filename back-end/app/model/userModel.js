'user strict';
var sql = require('./db.js');

//User object constructor
var User = function (user) {
    this.name = user.name;
    this.company = user.company;
    this.email = user.email;
    this.password = user.password;
    this.logo = user.logo;
    this.type = user.type;
    this.status = user.status;
    this.date_created = new Date();
    this.date_modified = new Date();
};
User.createUser = function (newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertID);
            result(newUser);
        }
    });
};
User.getUserById = function (userId, result) {
    sql.query("Select name, company, email, type, status from users where id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
User.getAllUser = function (result) {
    sql.query("Select * from users", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);

            result(null, res);
        }
    });
};
User.updateById = function (id, user, result) {
    sql.query("UPDATE users SET name = ?, company = ?, email = ?, logo = ?, type = ?, status = ?, date_modified = ?,  WHERE id = ?", [user.name, user.company, user.email, user.logo, user.type, user.status, user.date_modified, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
User.remove = function (id, result) {
    sql.query("UPDATE users SET status = ? WHERE id = ?", ['deleted', id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = User;
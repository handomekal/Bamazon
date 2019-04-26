var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Maybachhab17!",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;

    start();
});

function start() {
    inquirer
        .prompt({
            name: "saleItems",
            type: "list",
            message: "To make a purchase provide [ID] and how many units you'd like ",
            choices: ["ID", "# of UNITS"]
        })
        .then(function (answer) {
            if (answer.saleItems === "ID") {
                idProducts();
            }
            else if (answer.saleItems === "# of UNITS") {
                unitProducts();

            }
            else {
                connection.end();
            }
        })
}



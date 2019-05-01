var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadaId + "\n");

    makeTable()
});

var makeTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " || " + res[i].product_name + " || " + res[i].dempartment_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function (res) {
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "Which sneaker would you like to buy? [Press Q to quit]",
    }]).then(function (answer) {
        var correct = false;
        if (answer.choice.toUpperCase() == "Q") {
            process.exit();
        }
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name == answer.choice) {
                correct = true;
                var product_name = answer.choice;
                var id = i;
                inquirer.prompt({
                    type: "input",
                    name: "quant",
                    message: "How many would to like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                })
            }
        }
    })
    
    function start(){
        if (isNaN(value) == false) {
            return true;
        }
        else 
        { 
            return false;
        }
    }
    
    }.then(function (answer) {
        if ((res[id].stock_quantity - answer.quant) > 0) {
            connection.query("UPDATE products SET stock_quantity= " + (res[id].stock_quantity - answer.quant) + "WHERE product_name= " + product + " ' ", function (err, res2) {
                console.log("Nice kicks!");
                makeTable();
            });
        }
        else {
            console.log("Sorry, Not a valid selection");
            promptCustomer(res);
        }
        if (i == res.length && correct == false) {
            console.log("Sorry, Not a valid selection");
            promptCustomer(res);
        }
    });
}
//Declares Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');

//Connects to the MySQL localhost
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //username
    password: "olejuve123", //password
    database: "bamazondb"
})

//Checks for connection error, starts app
connection.connect(function(err) {
    if (err) throw err;
    //console.log("Connected as ID " + connection.threadID);
    console.log(" \n -------------------------------");
    console.log("* Welcome to Bamazon CMD Store! *");
    console.log(" -------------------------------\n");
    startShopping();
})

//Displays all products in the database
var startShopping = function() {
  connection.query('SELECT * FROM Products', function(err, res) {
    if(err)throw err;

    var productTable = new Table({
      head: ['ID#', 'Product Name', 'Department', 'Price', 'Stock'],
      colWidths: [4, 50, 15, 10, 10],
      wordWrap:true
    });

    for (var i = 0; i < res.length; i++) {
      productTable.push([res[i].ItemID, res[i].ProductName, res[i].DepartmentName, "$" + res[i].Price, res[i].StockQuantity]);
    }

    console.log(productTable.toString());
    selectItem(res);
  });
}

var selectItem = function(res) {
  inquirer.prompt([{
    name: "checkout",
    type: "input",
    message: "Enter ID# of item you wish to purchase...",
    name: "cart",
  }]).then(function(choice) {
    var id = choice.cart;
    var product;

    products.map(function(res) {
      if (res.ItemID == id) {
        product = res;
      }
    })
    inventoryCheck(res)
  })
}

var inventoryCheck = function(res) {
  inquirer.prompt([{
    type: "input",
    message: 'Enter Quantity...',
    name: 'quantity'
  }]).then(function(val) {
    if( (res[id].StockQuantity - val.quantity) > 0) {
      connection.query('UPDATE products SET StockQuantity="' + (res[id].StockQuantity-val.quantity) + '"WHERE ProductName="' + product + '"', function(err, res2) {
        if (err) throw err;
        console.log("Item added to cart!");
        startShopping(res2);
      })
    } else {
      console.log('Not a valid selection');
    }
  })
}
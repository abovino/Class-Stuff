var connection = require('./connection.js');

//Object relational mapper (ORM)

var orm = {
    selectWhere: function (tableInput, orderCol, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' ORDER BY ' + orderCol;
        connection.query(queryString, [valOfCol], function (err, result) {
            console.log(result);
        });
    },
    selectAndOrder: function (table, orderCol, orderBy) {
        var queryString = 'SELECT * FROM ' + table + ' ORDER BY ' + orderCol + ' ' + orderBy;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            console.log(result);
        });
    },
    findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString = 'SELECT ' + tableOneCol + ', COUNT(' + tableOneCol + ') AS count FROM ' + tableOne + ' LEFT JOIN ' + tableTwo + ' ON ' + tableTwo + '.' + tableTwoForeignKey + '= ' + tableOne + '.id GROUP BY ' + tableOneCol + ' ORDER BY count desc LIMIT 1';
        connection.query(queryString, function (err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;
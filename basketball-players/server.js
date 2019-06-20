const express = require('express');



const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basketball'
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});

require('./routes/html-routes')(app, connection);
/*Start the Server!*/
app.listen(PORT, () => {
    console.log('App running on port' + PORT);
});


// const http = require('http');
// const app = require('./app');
// const port = process.env.PORT || 8080;

// const server = http.createServer();

// server.listen(port);


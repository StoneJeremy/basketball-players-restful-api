const mysql = require('mysql');
module.exports = function(app,connection) {
    app.get('/', function(req,res) {
        //res.send('Hello from the sample basketball team');
       connection.query('SELECT * from basketball.players', function(err, data){
           (err)?res.send(err):res.json({basketball: data});
       });
    });
    
};
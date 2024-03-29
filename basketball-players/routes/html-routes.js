const mysql = require('mysql');
module.exports = function(app,connection) {

//Get data for all basketball players
app.get('/', function (req, res) {
    connection.query('select * from basketball.players', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

//Get data for a specific player
app.get('/player/:id', function (req, res) {
    connection.query('select * from basketball.players where id=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 
//Create a new basketball player - get values from text fields in front end
app.post('/player/new', function (req, res) {
    var params  = req.body;
    console.log(params);
     connection.query('INSERT INTO basketball.players (id, first_name, last_name) VALUES (PLACEHOLDER)', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });


// Delete a basketball player
app.get('/delete/:id', function (req, res) {
    connection.query('DELETE FROM basketball.players WHERE id = ?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });


 
};
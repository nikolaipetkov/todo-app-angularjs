var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
/*router.use('/scripts', express.static(__dirname + '/node_modules/'))*/

var con = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "parolka1",
  database: "news_project",
});

con.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});


/*function getTodos(){
    router.get('/api/todos', function(req,res){

        var sql = "SELECT * FROM todos";
        con.query(sql, function (err, result, fields) {
            if (err) throw err;

            console.log(result)
            res.json(result)
        });
    });
}*/


//GET ALL TODOS
router.get('/api/todos', function(req,res){

    var sql = "SELECT * FROM todos";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;

        console.log(result)
        res.json(result)
    });
});


//CREATE TODO
router.post('/api/createTodo', function(req,res){
    console.log('newTodo!!!!!!!!!', req.body.newTodo)
    var task = req.body.newTodo;
    var status = req.body.status;
    var sql = "INSERT INTO todos (Task, Status)  VALUES ?; select * from todos;";
    var values = [
        [task, status]
    ]           
    con.query(sql, [values], function (err, result, fields) {
        if (err) throw err;

        console.log('RESULT : ', result)
        res.json(result)
    });
});

//UPDATE TODO
router.post('/api/updateTodo', function(req,res){
    console.log('req for update is', req.body)
    var id = req.body.idToUpdate;
    var status = req.body.status;
    var sql = "UPDATE todos SET Status = ? WHERE ID= ?; select * from todos;";

    con.query(sql, [status, id], function (err, result, fields) {
        if (err) throw err;

        res.json(result)
    });
});

//DELETE TODO
router.post('/api/deleteTodo', function(req,res){
    console.log('req for delete is', req.body)
    var id = req.body.idToDelete;
    var sql = "DELETE FROM todos WHERE ID=?; select * from todos;";
    var values = [
        [id]
    ];
               
    con.query(sql, [values], function (err, result, fields) {
        if (err) throw err;

        res.json(result)
    });
});



module.exports = router;

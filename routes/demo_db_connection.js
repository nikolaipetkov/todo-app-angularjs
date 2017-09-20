var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "parolka1",
  database: "news_project"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected-!");
  //var sql = "INSERT INTO sources (name, image) VALUES ('Business Insider', 'some image path')";
  /*con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted!");
  });*/
});
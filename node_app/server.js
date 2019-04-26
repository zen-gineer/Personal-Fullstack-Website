// var cors = require('cors');
const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser');
const mysqlpass = require( "./sqlPass");
// console.log(mysqlpass)
//start server: npm run dev
//example id 00000000-0000-0000-360E-3892501AB14E
//root@localhost: O>>2B3eEwpEZ MySQLPass12!

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
//   });

// app.use(cors());
console.log("mysqlpass",mysqlpass)
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: mysqlpass,
	database: 'nodemysql',
});

db.connect(err => {
	if (err) {
		console.log(err);
	}
	console.log('mysql connected');
});

app.post('/api/newblogpost', (req, res) => {
	var body = req.body;
	let sql = `INSERT INTO posts(title, body) VALUES (\"${body.title}\", \"${body.body}\")`;
	console.log(sql);
	db.query(sql, (err, results) => {
		if (err) throw err;
		res.json("Posted to database");
	});
	
});

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/blogposts', (req, res) => {
	let sql = 'SELECT * from posts';
	db.query(sql, (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

app.get('/adpost1', (req, res) => {
	let post = { title: 'Post One', body: 'This is post number 1' };
	let sql = 'INSERT INTO posts SET ?';
	let query = db.query(sql, post, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(`Post 1 added ${result}`);
	});
});

app.get('/createpoststable', (req, res) => {
	let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('Posts table created...');
	});
	res.send('Hello World');
});

app.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE nodemysql';
	db.query(sql, (err, result) => {
		if (err) {
			console.log('database error');
			throw err;
		}
		res.send('database created');
	});
	res.send('Hello World');
});

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);

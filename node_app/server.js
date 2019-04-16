var healthData = require('./health.json');
const express = require('express');
const app = express();
const mysql = require('mysql');
//start server: npm run dev
//example id 00000000-0000-0000-360E-3892501AB14E
//root@localhost: O>>2B3eEwpEZ MySQLPass12!

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'MySQLPass12!',
	database: 'nodemysql',
});

db.connect(err => {
	if (err) {
		console.log(err);
	}
	console.log('mysql connected');
});

app.get('/', (req, res) => {
	res.send('Hello World');
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

app.get('/api/health', (req, res) => {
	res.send(healthData);
});

app.get('/api/health/:id', (req, res) => {
	var healthId = {};
	healthData['data'].forEach(element => {
		console.log(element[1]);
		if (element[1] === req.params.id) {
			healthId = element;
		}
	});
	if (!healthId) return res.status(404).send('The given ID was not found');
	res.send(healthId);
});

app.listen(3000, () => {
	console.log('server started on port 3000');
});

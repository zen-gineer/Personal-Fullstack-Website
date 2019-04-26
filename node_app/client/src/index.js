import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import BlogPosts from './components/blogposts';
import NewEntry from './components/newEntry';
import NavBar from './components/navbar';

// console.log(newnave)
var All = (
	<div>
		<NavBar />
		<Router>
			<Switch>
				<Route exact path="/Blog" component={BlogPosts} />
				<Route exact path="/NewEntry" component={NewEntry} />
			</Switch>
		</Router>
	</div>
);
ReactDOM.render(All, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

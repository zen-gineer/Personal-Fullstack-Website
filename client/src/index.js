import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import './greensock.css';
import 'jquery/dist/jquery';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import BlogPosts from './components/blogposts';
import GitRepo from './components/gitrepos';
import NavBar from './components/navbar';
import ML from './components/ml';
import Resume from './components/resume';
import HomePage from './components/home';

// if ('serviceWorker' in navigator) {
// 	// console.log("service worker supported.")
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker
// 			.register('../sw_cached_pages.js')
// 			.then(reg => console.log('Service worker registered'))
// 			.catch(err => console.log(`Service worker error: ${err}`));
// 	});
// }

var All = (

	<React.Fragment >
		{/* <NavBar /> */}
		<Router>
			<Switch>
			<Route exact path="/" component={HomePage} />
				<Route exact path="/Resume" component={Resume} />
				<Route exact path="/Blog" component={BlogPosts} />
				<Route exact path="/GitRepo" component={GitRepo} />
				<Route exact path="/ml" component={ML} />
			</Switch>
		</Router>
	</React.Fragment>

);
ReactDOM.render(All, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

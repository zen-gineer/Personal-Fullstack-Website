import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';

// import App from './App';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import BlogPosts from './components/blogposts';
// import NewEntry from './components/newEntry';

// const component = (
// 	<React.Fragment>
// 		{/* <div className="row">
// 			<NewEntry />
// 		</div> */}
// 		<div className="row">
// 			<BlogPosts />
// 		</div>
// 	</React.Fragment>
// );

ReactDOM.render(<BlogPosts/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

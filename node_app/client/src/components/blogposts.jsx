import React, { Component } from 'react';
import { TimelineLite, CSSPlugin } from "gsap/all";
// import { Button, View, Text } from 'react-native';
// var reactNavBar = require('react-nav-bar');
// var NavBar = reactNavBar.NavBar;
// var Menu = reactNavBar.Menu;
// import { createStackNavigator, createAppContainer } from 'react-navigation'; //
// import Request from 'superagent';

class BlogPosts extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.myTween = new TimelineLite({ paused: true });
		this.myElements = [];
		// this.cardsTween;
		this.state = {
			posts: [],
			buttonToggle: 'Create Post',
			title: '',
			body: '',
		};
	}

	// static navigationOptions = {
	// 	title: 'Blog',
	// };

	componentWillMount() {
		console.log('fetching posts')
		fetch('/api/blogposts')
			.then(res => res.json())
			.then(posts => this.setState({ posts }, () => console.log('Posts fetched', posts)));
	}

	componentDidMount() {
		console.log('stagger effect', this.myElements);
		// this.myTween.staggerTo(this.myElements, 2, { y: -20, autoAlpha: 1 }, 1);
		this.myTween.staggerTo( this.myElements , 0.5, { autoAlpha: 1, y: -20 }, 0.1);
		this.myTween.play();
	}

	render() {
		this.myTween
			.kill()
			.clear()
			.pause(0);
		return (
			<div className="blog jumbotron z-depth-5">
				{this.Title()}
				{this.Description()}
				{this.PostGetButton()}
				{this.state.buttonToggle === 'Create Post' ? this.Table() : this.CreatePost()}
				
			</div>
		);
	}

	CreatePost() {
		return (
			<div>
				<form className="blog-form" onSubmit={this.handleSubmit}>
					<label className="blog-title">
						Title
						<br />
						<input
							className="col-8-sm"
							name="title"
							type="text"
							value={this.state.title}
							onChange={this.handleTitleChange}
						/>
						<input className="col-4-sm" name="submitPost" type="submit" value="Submit" />
					</label>
					<br />
					<label className="blog-body">
						Body
						<br />
						<textarea
							className="blog-text-area"
							name="body"
							type="text"
							checked={this.state.body}
							onChange={this.handleBodyChange}
						/>
					</label>
				</form>
			</div>
		);
	}

	PostGetButton() {
		return (
			<button onClick={this.toggle} className="btn btn-secondary">
				{this.state.buttonToggle}
			</button>
		);
	}

	toggle() {
		this.setState(state => {
			return { buttonToggle: state.buttonToggle === 'Create Post' ? 'See Posts' : 'Create Post' };
		});
		if (this.state.buttonToggle === 'Create Post') {
			this.componentWillMount();
			
		} else {
			console.log("myTween", this.myElements[0])
			this.myTween.restart();
		}
		console.log(this.state.buttonToggle);
	}

	Table() {
		return (
			<div className="row container">
				<table className="table">
					<thead>
						<tr>
							<th className={this.state.titleCol}>Title</th>
							<th className={this.state.bodyCol}>Body</th>
						</tr>
					</thead>
					<tbody>
						{this.state.posts.map((post, index) => {
							// console.log(index)
							return (<tr className="blog-table-row" 
							key={post.id} 
							ref={tr => (this.myElements[index]=tr)}>
								<td className={this.state.titleCol}>{post.title}</td>
								<td className={this.state.bodyCol}>{post.body}</td>
							</tr>)
						})}
					</tbody>
				</table>
			</div>
		);
	}

	Title() {
		return (
			<div className="section-title">
				<h2>
					<font color="black">Blog Posts</font>
				</h2>
			</div>
		);
	}

	Description() {
		return (
			<div className="blog-description">
				<p />
				<font color="black">
					This blog was meant to practice front-end / back-end developement. As well as communication with a
					sql database. It is functional and will take your thoughts and save them for later in a post.
				</font>
			</div>
		);
	}

	handleTitleChange(event) {
		this.setState({ title: event.target.value });
		console.log(this.state.title);
		event.preventDefault();
	}

	handleBodyChange(event) {
		this.setState({ body: event.target.value });
		console.log(this.state.body);
		event.preventDefault();
	}

	handleSubmit(event) {
		console.log('submitted');
		event.preventDefault();
		// console.log(this);
		let newPost = { title: this.state.title, body: this.state.body };
		let settings = {
			async: true,
			crossDomain: true,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache',
			},
			processData: false,
			body: JSON.stringify(newPost),
		};
		let url = '/api/newblogpost';
		fetch(url, settings)
			.then(res => res.json())
			.then(data => console.log(data));
		this.waitToFunction(this.toggle);
	}

	resolveAfter2Seconds(x) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(x);
			}, 2000);
		});
	}

	async waitToFunction(myFunc) {
		var x = await this.resolveAfter2Seconds(1000);
		console.log(x); // 10
		myFunc();
	}

	
}

export default BlogPosts;

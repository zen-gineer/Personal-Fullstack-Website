import React, { Component } from 'react';
// import Request from 'superagent';

class BlogPosts extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);

		this.state = {
			posts: [],
			// titleCol: 'col-2',
			// bodyCol: 'col-10',
			buttonToggle: 'See Posts',
			title: '',
			body: '',
		};
	}

	componentDidMount() {
		fetch('/api/blogposts')
			.then(res => res.json())
			.then(posts => this.setState({ posts }, () => console.log('Posts fetched', posts)));
	}

	render() {
		return (
			<div className="blog jumbotron">
				{this.Title()}
				{this.Description()}
				{this.PostGetButton()}
				{this.state.buttonToggle === 'Create Post' ? this.Table() : this.CreatePost()}
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
		this.waitToToggle();
	}

	resolveAfter2Seconds(x) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(x);
			}, 2000);
		});
	}

	async waitToToggle() {
		var x = await this.resolveAfter2Seconds(1000);
		console.log(x); // 10
		this.toggle();
	}

	CreatePost() {
		return (
			<div>
				<form className="blog-form" onSubmit={this.handleSubmit}>
					<label className="blog-title">
						Title<br />
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
						Body<br />
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
			this.componentDidMount();
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
						{this.state.posts.map(post => (
							<tr key={post.id}>
								<td className={this.state.titleCol}>{post.title}</td>
								<td className={this.state.bodyCol}>{post.body}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}

	Title() {
		return (
			<div className="section-title">
				<h2>Blog Posts</h2>
			</div>
		);
	}

	Description() {
		return (
			<div className="blog-description">
				<p />
				This blog was meant to practice front-end / back-end developement. As well as communication with a sql
				database. It is functional and will take your thoughts and save them for later in a post.
			</div>
		);
	}
}

export default BlogPosts;

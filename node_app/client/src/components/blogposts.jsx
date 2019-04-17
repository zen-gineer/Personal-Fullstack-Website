import React, { Component } from 'react';
// import Request from 'superagent';

class BlogPosts extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			titleCol: 'col-2',
			bodyCol: 'col-6',
			buttonToggle: 'See Posts',
		};
	}

	componentDidMount() {
		fetch('/api/blogposts')
			.then(res => res.json())
			.then(posts => this.setState({ posts }, () => console.log('Posts fetched', posts)));
	}

	render() {
		return (
			<React.Fragment>
				{this.Title()}
				{this.Button()}
				{this.Table()}
			</React.Fragment>
		);
	}

	Button() {
		var buttonText = this.state.buttonToggle === 'See Posts' ? 'Create Post' : 'See Posts';
		return <button onClick={this.toggle()} className="btn btn-secondary">{buttonText}</button>;
    }
    
    toggle(){
        if (this.state.buttonToggle === "See Posts"){
            this.state.buttonToggle = "Create Post"
        } else {
            this.state.buttonToggle = "See Posts"
        }
        console.log(this.state.buttonToggle)
    }

	Table() {
		return (
			<div className="row container">
				<table className="table col-12">
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
			<div className="row col-md-12 jumbotron">
				<h2>Blog Posts</h2>
			</div>
		);
	}
}

export default BlogPosts;

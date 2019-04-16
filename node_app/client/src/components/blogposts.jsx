import React, { Component } from 'react';
// import Request from 'superagent';

class BlogPosts extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
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
				<h2>Blog Posts</h2>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						{this.state.posts.map(post => (
							<tr key={post.id}>
								<td>{post.title}</td>
								<td>{post.body}</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default BlogPosts;

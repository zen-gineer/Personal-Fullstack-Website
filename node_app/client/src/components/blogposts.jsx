import React, { Component } from 'react';
// import Request from 'superagent';

class BlogPosts extends Component {
	constructor() {
        super();
        // this.toggle = this.toggle.bind(this);
		this.state = {
			posts: [],
			// titleCol: 'col-2',
			// bodyCol: 'col-10',
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
				{/* {this.Title()} */}
				{this.ButtonElement()}
				{/* {this.Table()} */}
			</React.Fragment>
		);
	}

	ButtonElement() {
        console.log('Creating button')
		var buttonText = this.setState((buttonToggle) => (buttonToggle === 'See Posts') ? 'Create Post' : 'See Posts');
		return <button onClick={this.toggle()} className="btn btn-secondary">{buttonText}</button>;
    }
    
    toggle () {
        console.log('Button clicked')
        if (this.state.buttonToggle === "See Posts"){
            this.setState({buttonToggle: "Create Post"})
        } else {
            this.setState({buttonToggle: "See Posts"})
        }
        console.log(this.state.buttonToggle)
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
			<div className="row col-md-12 jumbotron">
				<h2>Blog Posts</h2>
			</div>
		);
	}
}

export default BlogPosts;

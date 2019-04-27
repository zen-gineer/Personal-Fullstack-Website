import React, { Component } from 'react';
// import Request from 'superagent';

class GitRepo extends Component {
	state = {
		repos: [],
	};
	componentDidMount() {
		let url = 'https://api.github.com/users/zen-gineer/repos';
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log('gitrepo');
				this.setState({ repos: data });
				console.log(this.state);
			});
	}

	render() {
		// this.CreateRepoList()
		return (
			<div className="blog jumbotron">
				{this.Description()}
				{this.CreateRepoList()}
			</div>
		);
	}

	Description() {
		return (
			<div className="blog-description">
				<p />
				Below is a list of my projects you can find on https://github.com/zen-gineer. And a short description of each.
			</div>
		);
	}

	CreateRepoList() {
		// console.log('createRepoList', this.state.repos);
		return (
			<div>
				{this.state.repos.map(repo => (
					<li key={repo.name}><a href={repo.html_url}>{repo.name}</a></li>
				))}
			</div>
		);
	}
}

export default GitRepo;

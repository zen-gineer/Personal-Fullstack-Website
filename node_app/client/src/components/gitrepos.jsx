import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import marked from 'marked';
import Markdown from 'markdown-to-jsx';
// import ReactMarkdown from 'react-markdown';

class GitRepo extends Component {
	constructor() {
		super();
		this.state = {
			repos: [],
			readmes: {},
		};
	}
	componentDidMount() {
		let url = 'https://api.github.com/users/zen-gineer/repos';
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log('gitrepo');
				this.setState({ repos: data });
				console.log(this.state);
				this.state.repos.map(repo => {
					var readmepathstr = '../reporeadmes/' + repo.name + '.html'
					
					try {
						const readmepath = require();
						console.log(readmepath);
						this.state.readmes[repo.name] = readmepath;
						this.forceUpdate();
						// fetch(readmepath)
						// 	.then(res => res.text())
						// 	.then(text => {
						// 		this.state.readmes[repo.name] = text;
						// 		this.forceUpdate();
						// 		// console.log(text);
						// 	});
					} catch (err) {console.log("no ", repo.name, " readme file in ", readmepathstr)}
				});
			});
			var thing = require('../reporeadmes/Dr-Seuss-Machine-Learning-LSTM.html');
			console.log('thing',thing)
	}

	render() {
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
				Below is a list of my projects you can find on https://github.com/zen-gineer. And a short description of
				each.
			</div>
		);
	}

	CreateRepoList() {
		console.log('createRepoList', this.state);
		return (
			<div className="repo-list">
				{this.state.repos.map(repo => {
					console.log(this.state.readmes[repo.name]);
					return this.state.readmes[repo.name] ? (
						// var repoHtml = require('../reporeadmes/' + repo.name + '.html')
						// console.log("repoHtml",repoHtml)
						// return(
							<li key={repo.name}>
								<Popup
									className="readme-popup"
									trigger={<a href={repo.html_url}>{repo.name}</a>}
									position="right center"
									on="hover"
								>
								<embed src={require('../reporeadmes/' + repo.name + '.html')}/>
									
								</Popup>
							</li>
						// )
							
					 ) : (<li key={repo.name}>
						<a href={repo.html_url}>{repo.name}</a>
					</li>)
						
					})
				};
		)
			</div>
		);
	}
}

export default GitRepo;

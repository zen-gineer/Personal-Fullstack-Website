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
				// this.state.repos.map(repo => {
				// 	try {
				// 		var readmepathstr = '../reporeadmes/' + repo.name + '.pdf'
				// 		console.log(readmepathstr);
				// 		var readmepath = require(readmepathstr);

				// 		this.state.readmes[repo.name] = readmepath;
				// 		this.forceUpdate();

				// 	} catch (err) {console.log("no ", repo.name, " readme file in ", readmepathstr,err)}
				// });
			});
		var thing = require('../reporeadmes/Dr-Seuss-Machine-Learning-LSTM.pdf');
		console.log('thing', thing);
	}

	render() {
		return (
			<div className="github jumbotron">
				{this.Title()}
				{this.Description()}
				{this.CreateRepoList()}
			</div>
		);
	}

	Title() {
		return (
			<div className="section-title">
				<h2>
					<font color="black">My Git Repositories</font>
				</h2>
			</div>
		);
	}

	Description() {
		return (
			<div className="blog-description">
				<p>
					<font color="black">
						<p>Find more at <a href='https://github.com/zen-gineer.'>https://github.com/zen-gineer.</a> </p>
						<p><strong>Hover</strong> to see detailed descriptions.</p>
					</font>
				</p>
			</div>
		);
	}

	CreateRepoList() {
		console.log('createRepoList', this.state);
		const popupStyle = { width: '600px' };
		return (
			<div className="repo-list">
				{this.state.repos.map(
					repo => {
						console.log(this.state.readmes[repo.name]);
						try {
							var readmePdf = require('../reporeadmes/' + repo.name + '.pdf');
							return (
								// var readmePdf = require('../reporeadmes/' + repo.name + '.pdf')
								// console.log("repoHtml",repoHtml)
								// return(
								<li key={repo.name}>
									<Popup
										contentStyle={popupStyle}
										className="readme-popup"
										trigger={<a href={repo.html_url}>{repo.name}</a>}
										position="right center"
										on="hover"
									>
										<embed className="readme" src={readmePdf} />
									</Popup>
								</li>
							);
						} catch (err) {
							console.log(err);
							return (
								<li key={repo.name}>
									<a href={repo.html_url}>{repo.name}</a>
								</li>
							);
						}
					}

					//  ) : (
				)}
			</div>
		);
	}
}

export default GitRepo;

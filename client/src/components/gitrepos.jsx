import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { TimelineLite	 } from 'gsap';
// import marked from 'marked';
// import Markdown from 'markdown-to-jsx';
// import ReactMarkdown from 'react-markdown';

class GitRepo extends Component {
	constructor() {
		super();
		this.myTween = new TimelineLite({paused:true});
		// this.myElement = null;
		this.myElements = [];
		this.state = {
			repos: [],
			readmes: {},
		};
	}
	componentWillMount() {
		let url = 'https://api.github.com/users/zen-gineer/repos';
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log('gitrepo');
				this.setState({ repos: data }, () => {
					console.log('after setstate ', this.myElements);
				});
				console.log(this.state);
			});
		// var thing = require('../reporeadmes/Dr-Seuss-Machine-Learning-LSTM.pdf');
		// console.log('thing', thing);
	}

	componentDidUpdate(){
		console.log('update ', this.myElements);
		this.myTween = this.myTween.staggerFrom(this.myElements, 0.5, { opacity: 0, y: 700}, 0.1).play();
	}

	render() {
		// this.myTween
		// 	.kill()
		// 	.clear()
		// 	.pause(0);
		return (
			<div className="blog jumbotron">
				{this.Title()}
				{this.Description()}
				{this.CreateRepoList()}
			</div>
		);
	}

	CreateRepoList() {
		console.log('createRepoList', this.state);
		const popupStyle = { width: '600px' };
		return (
			<div className="repo-list">
				{this.state.repos.map(repo => {
					console.log(this.state.readmes[repo.name]);
					try {
						var readmePdf = require('../reporeadmes/' + repo.name + '.pdf');
						return (
							// <li key={repo.name} className="blog-table-row">
							<li key={repo.name} ref={ref=>this.myElements.push(ref)} className="blog-table-row">
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
						// console.log(err);
						return (
							<li key={repo.name} ref={ref=>this.myElements.push(ref)}>
								<a href={repo.html_url}>{repo.name}</a>
							</li>
						);
					}
				})}
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
			<div className="blog-description" ref={div => (this.myElement = div)}>
				<p>
					<font color="black">
						<p>
							Find more at <a href="https://github.com/zen-gineer.">https://github.com/zen-gineer.</a>{' '}
						</p>
						<p>
							<strong>Hover</strong> to see detailed descriptions.
						</p>
					</font>
				</p>
			</div>
		);
	}
}

export default GitRepo;

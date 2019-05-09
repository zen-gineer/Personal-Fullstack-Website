import React, { Component } from 'react';
import TweenLite, { TimelineLite } from 'gsap';
// import { Button, View, Text } from 'react-native';


class HomePage extends Component {
	constructor() {
		super();
		this.myTween = new TimelineLite({ paused: true });
		this.myElement = null;
		this.state = {};
	}

	// componentDidMount() {
	// 	fetch('/api/HomePage')
	// 		.then(res => res.json())
	// 		.then(posts => this.setState({ posts }, () => console.log('Posts fetched', posts)));
	// }

	componentDidMount() {
		// this.myTween = TweenLite.from(this.myElement, 1, { scale:.5,y:70, x:30, opacity: 0});
		this.myTween = TweenLite.from(this.myElement, 0.5, { opacity: 0, y: 700, yoyo: true, repeat: 10 }, 0.1);
	}

	render() {
		// this.myTween
		// 	.kill()
		// 	.clear()
		// 	.pause(0);
		return (
			<div>
				<button className="btn gsap-btn" onClick={() => {console.log('play', this.myTween);this.myTween.play()}}>
							Play
						</button>
						<button className="btn gsap-btn" onClick={() => {console.log('pause', this.myTween);this.myTween.pause()}}>
							Pause
						</button>
						<button className="btn gsap-btn" onClick={() => {console.log('reverse', this.myTween);this.myTween.reverse()}}>
							Reverse
						</button>
						<button className="btn gsap-btn" onClick={() => {console.log('restart', this.myTween);this.myTween.restart()}}>
							Restart
						</button>
				
				<div ref={div => this.myElement = div} className="blog jumbotron">
					{/* {this.Title()} */}
					{this.Description()}
				</div>
			</div>
		);
	}

	Title() {
		return (
			<div className="section-title">
				<h2>
					<font color="black">Home Page</font>
				</h2>
			</div>
		);
	}

	Description() {
		return (
			// <div className="blog-description" ref={div => this.myElement.push(div)}>
			<div className="blog-description" >
				<p />
				<font color="black">
					This personal website is to showcase some skills and accomplishments I have, and to practice some
					new ones. It uses node/express backend with a mySQL database connection and React front end. This
					readme is available as a description of this website and how to use it. And will also show up as a
					pdf on the github repo page as popup description.
				</font>
			</div>
		);
	}
}

export default HomePage;

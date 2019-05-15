import React, { Component } from 'react';
import TweenLite, { TimelineLite } from 'gsap';
// import { Power0 } from 'gsap/all';
// import { Button, View, Text } from 'react-native';

class HomePage extends Component {
	constructor() {
		super();
		this.myTween = new TimelineLite({ paused: true });
		this.myElements = [];
		this.state = {
			activeSlide: ['homeSlide slide1', 'bottom homeSlide slide1'],
			slideMax: 3,
			slideMin: 1,
			xPos: null,
			yPos: null,
		};
	}

	componentDidMount() {
		var allButActive = [
			'homeSlide slide2',
			'homeSlide slide3',
			'bottom homeSlide slide2',
			'bottom homeSlide slide3',
		].map(key => this.myElements[key]);

		console.log(this.myElements, allButActive);
		this.myTween = TweenLite.set(allButActive, { autoAlpha: 0 });
		TweenLite.set(this.myElements['slideNavPrev'], { autoAlpha: 0.3 });
	}

	render() {
		return (
			<div className="bcg">
				<div
					className="hero"
					ref={ref => (this.myElements['hero'] = ref)}
					onMouseMove={e => {
						this.setState({ yPos: e.clientY/window.innerHeight - .5 });
						this.setState({ xPos: e.clientX/window.innerHeight - .5 });
						
						// Tilt the hero container
						TweenLite.to(this.myElements['hero'], 0.6, {
							rotationY: 3 * this.state.xPos,
							rotationX: 3 * this.state.yPos,
							ease: "Power1.easeOut",
							transformPerspective: 900,
							transformOrigin: 'center',
						});
						// console.log(5 * this.state.xPos, 5 * this.state.yPos);
					}}
				>
					{this.Top()}
					{this.Bottom()}
					{this.Navigation()}
					<div className="divider" />
				</div>
			</div>
		);
	}

	Top() {
		return (
			<div className="top" ref={ref => (this.myElements['top'] = ref)}>
				<div className="homeSlide slide1" ref={ref => (this.myElements['homeSlide slide1'] = ref)}>
					<h1 ref={ref => (this.myElements['homeSlide slide1 h1'] = ref)}>What?</h1>
				</div>

				<div className="homeSlide slide2" ref={ref => (this.myElements['homeSlide slide2'] = ref)}>
					<h1 ref={ref => (this.myElements['homeSlide slide2 h1'] = ref)}>Who?</h1>
				</div>

				<div className="homeSlide slide3" ref={ref => (this.myElements['homeSlide slide3'] = ref)}>
					<h1 ref={ref => (this.myElements['homeSlide slide3 h1'] = ref)}>What else?</h1>
				</div>
			</div>
		);
	}

	Bottom() {
		return (
			<div className="bottom" ref={ref => (this.myElements['bottom'] = ref)}>
				<div className="homeSlide slide1" ref={ref => (this.myElements['bottom homeSlide slide1'] = ref)}>
					<p ref={ref => (this.myElements['bottom homeSlide slide1 p'] = ref)}>Work is a part of life, not apart from life. So why not enjoy it?</p>
				</div>
				<div className="homeSlide slide2" ref={ref => (this.myElements['bottom homeSlide slide2'] = ref)}>
					<p ref={ref => (this.myElements['bottom homeSlide slide2 p'] = ref)}>zen-gineer is descriptive title that represents values I've collected over the years. Engineering is a part of life. We are all creators. And Zen buddhism is the beautiful evolution of the spread of India's culture to the Asian world. A beautiful blossoming of the intermingling of cultures.</p>
					{/* <p>
						Inspired by{' '}
						<a href="http://www.fixedgroup.com/" target="_blank">
							fixedgroup.com
						</a>{' '}
						and{' '}
						<a href="http://www.heartkids.co.nz/" target="_blank">
							heartkids.co.nz
						</a>
						.
					</p> */}
				</div>

				<div className="homeSlide slide3" ref={ref => (this.myElements['bottom homeSlide slide3'] = ref)}>
					<p ref={ref => (this.myElements['bottom homeSlide slide3 p'] = ref)}></p>
				</div>
			</div>
		);
	}

	Navigation() {
		return (
			<div id="slideNav" ref={ref => (this.myElements['slideNave'] = ref)}>
				<ul>
					<li
						className="slideNavPrev"
						ref={ref => (this.myElements['slideNavPrev'] = ref)}
						onClick={() => this.GoToPrevSlide()}
					>
						<a href="#" title="Go to previous slide">
							<span className="ico ico-up" ref={ref => (this.myElements['ico ico-up'] = ref)}>
								↓
							</span>
						</a>
					</li>
					<li
						className="slideNavNext"
						ref={ref => (this.myElements['slideNavNext'] = ref)}
						onClick={() => this.GoToNextSlide()}
					>
						<a href="#" title="Go to next slide">
							<span className="ico ico-down" ref={ref => (this.myElements['ico ico-down'] = ref)}>
								↑
							</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}

	GoToNextSlide() {
		var activeIndex = parseInt(this.state.activeSlide[0].search(/slide./)) + 5,
			activeNum = parseInt(this.state.activeSlide[0][activeIndex]);
		if (activeNum === this.state.slideMin) {
			TweenLite.set(this.myElements['slideNavPrev'], { autoAlpha: 1 });
		}
		// console.log('before:', activeNum);
		if (activeNum < this.state.slideMax) {
			var slideIn = ['homeSlide slide' + String(activeNum + 1), 'bottom homeSlide slide' + String(activeNum + 1)];
			var animateInText = [
				'homeSlide slide' + String(activeNum + 1) + ' h1',
				'bottom homeSlide slide' + String(activeNum + 1) + ' p',
			];
			var slideOut = ['homeSlide slide' + String(activeNum), 'bottom homeSlide slide' + String(activeNum)];
			var animateOutText = [
				'homeSlide slide' + String(activeNum) + ' h1',
				'bottom homeSlide slide' + String(activeNum) + ' p',
			];
			console.log('slideOut', slideOut);
			console.log('animateOutText', animateOutText);
			var tl = new TimelineLite();
			console.log('In', slideIn.map(el => this.myElements[el]));
			console.log('Out', slideOut.map(el => this.myElements[el]));
			tl.set(slideIn.map(el => this.myElements[el]), { y: '100%', autoAlpha: 1 })
				.set(slideOut.map(el => this.myElements[el]), { autoAlpha: 0 })
				.to(animateOutText, 0.3, { y: '+=15px', autoAlpha: 0, ease: 'Power3.easeInOut' }, 0)
				.to(slideOut.map(el => this.myElements[el]), 0.5, { y: '-100%', ease: 'Power3.easeInOut' }, 0)
				.to(slideIn.map(el => this.myElements[el]), 0.5, { y: '-=100%', ease: 'Power3.easeInOut' }, '-=0.5')
				.fromTo(
					animateInText.map(el => this.myElements[el]),
					0.3,
					{ y: '+=50px', autoAlpha: 0 },
					{ autoAlpha: 1, y: 0, ease: 'Power1.easeInOut' },
					0.3
				);
			if (activeNum + 1 === this.state.slideMax) {
				TweenLite.set(this.myElements['slideNavNext'], { autoAlpha: 0.3 });
			}
			this.setState({ activeSlide: slideIn });
		}
	}

	GoToPrevSlide() {
		var activeIndex = parseInt(this.state.activeSlide[0].search(/slide./)) + 5,
			activeNum = parseInt(this.state.activeSlide[0][activeIndex]);
		if (activeNum === this.state.slideMax) {
			TweenLite.set(this.myElements['slideNavNext'], { autoAlpha: 1 });
		}
		if (activeNum > this.state.slideMin) {
			var slideIn = ['homeSlide slide' + String(activeNum - 1), 'bottom homeSlide slide' + String(activeNum - 1)];
			var animateInText = [
				'homeSlide slide' + String(activeNum - 1) + ' h1',
				'bottom homeSlide slide' + String(activeNum - 1) + ' p',
			];
			var slideOut = ['homeSlide slide' + String(activeNum), 'bottom homeSlide slide' + String(activeNum)];
			var animateOutText = [
				'homeSlide slide' + String(activeNum) + ' h1',
				'bottom homeSlide slide' + String(activeNum) + ' p',
			];
			var tl = new TimelineLite();
			tl.set(slideIn.map(el => this.myElements[el]), { y: '-100%', autoAlpha: 1 })
				.set(slideOut.map(el => this.myElements[el]), { autoAlpha: 0 })
				.to(animateOutText, 0.3, { y: '+=15px', autoAlpha: 0, ease: 'Power3.easeInOut' }, 0)
				.to(slideOut.map(el => this.myElements[el]), 0.5, { y: '100%', ease: 'Power3.easeInOut' }, 0)
				.to(slideIn.map(el => this.myElements[el]), 0.5, { y: '+=100%', ease: 'Power3.easeInOut' }, '-=0.5')
				.fromTo(
					animateInText.map(el => this.myElements[el]),
					0.3,
					{ y: '-=50px', autoAlpha: 0 },
					{ autoAlpha: 1, y: 0, ease: 'Power1.easeInOut' },
					0.3
				);
			// tl.set(slideIn.map(el => this.myElements[el]), { autoAlpha: 1 }).set(
			// 	slideOut.map(el => this.myElements[el]),
			// 	{ autoAlpha: 0 }
			// );
			if (activeNum - 1 === this.state.slideMin) {
				TweenLite.set(this.myElements['slideNavPrev'], { autoAlpha: 0.3 });
			}
			this.setState({ activeSlide: slideIn });
		}
	}
}

export default HomePage;

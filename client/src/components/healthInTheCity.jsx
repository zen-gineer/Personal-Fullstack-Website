import React, { Component } from 'react';
import TweenLite, { TimelineLite } from 'gsap';
// import { Power0 } from 'gsap/all';
// import { Button, View, Text } from 'react-native';

class Health extends Component {
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
						this.setState({ yPos: e.clientY / window.innerHeight - 0.5 });
						this.setState({ xPos: e.clientX / window.innerHeight - 0.5 });

						// Tilt the hero container
						TweenLite.to(this.myElements['hero'], 0.6, {
							rotationY: 3 * this.state.xPos,
							rotationX: 3 * this.state.yPos,
							ease: 'Power1.easeOut',
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
					<h1 ref={ref => (this.myElements['homeSlide slide1 h1'] = ref)}>Who am I?</h1>
				</div>

				<div className="homeSlide slide2" ref={ref => (this.myElements['homeSlide slide2'] = ref)}>
					<h1 ref={ref => (this.myElements['homeSlide slide2 h1'] = ref)}>What is this?</h1>
				</div>

				<div className="homeSlide slide3" ref={ref => (this.myElements['homeSlide slide3'] = ref)}>
					<h1 ref={ref => (this.myElements['homeSlide slide3 h1'] = ref)}>Find me on...</h1>
				</div>
			</div>
		);
	}

	Bottom() {
		return (
			<div className="bottom" ref={ref => (this.myElements['bottom'] = ref)}>
				<div className="homeSlide slide1" ref={ref => (this.myElements['bottom homeSlide slide1'] = ref)}>
				<p ref={ref => (this.myElements['bottom homeSlide slide2 p'] = ref)}>
						The <span style={{ color: '#8533ff' }}>c</span>
						<span style={{ color: '#3333ff' }}>o</span>
						<span style={{ color: '#70dbdb' }}>l</span>
						<span style={{ color: '#66ffb3' }}>o</span>
						<span style={{ color: '#ffff4d' }}>r</span>
						<span style={{ color: '#ff944d' }}>f</span>
						<span style={{ color: '#ff4da6' }}>u</span>
						<span style={{ color: '#a64dff' }}>l</span> world of Hindu mythology, transformed by Japanese
						minds and distilled,
						mostly through Alan Watts, to the materialistic western world, and finally delighting a small
						town girl from California. <span style={{ fontSize: '25px' }}>ZEN-GINEER</span>, the name I've
						embraced on many online platforms, is descriptive of my experience of the ever evolving and
						blending world of ideas. And is an aspiration for life and work. Creation. Optimization.
						Actualization. The conscious or unconscious endeavors of us all.
					</p>
					
				</div>
				<div className="homeSlide slide2" ref={ref => (this.myElements['bottom homeSlide slide2'] = ref)}>
				<p ref={ref => (this.myElements['bottom homeSlide slide1 p'] = ref)}>
						An online playground to develop and showcase technical skills. <br />
						And to communicate important things. <br/>
					</p>
				</div>

				<div className="homeSlide slide3" ref={ref => (this.myElements['bottom homeSlide slide3'] = ref)}>
					<p ref={ref => (this.myElements['bottom homeSlide slide3 p'] = ref)}>
					<a href="https://github.com/zen-gineer" className="col-sm-4">Github</a>
					<a href="https://www.linkedin.com/" className="col-sm-4">LinkedIn</a>
					<a href="https://resume.creddle.io/resume/27m4xt3l91n" className="col-sm-4">Resume</a>
					<a href="https://twitter.com/zen_gineer" className="col-sm-4">Twitter</a>
					
					</p>
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
				.set(slideOut.map(el => this.myElements[el]), { autoAlpha: 0 }, 0.5)
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
				.set(slideOut.map(el => this.myElements[el]), { autoAlpha: 0 }, 0.5)
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

export default Health;

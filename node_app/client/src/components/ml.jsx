import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { XYPlot, XAxis, YAxis, MarkSeries, Hint, Borders } from 'react-vis';
import React, { Component } from 'react';
// import image1 from '../images/ml.png';
import cert from '../images/Coursera_3RLZA3C7PQTX.png';
import logGraph from './LogisticRegression.jsx';
// const keys = require('../keys');
// const Twitter = require('twitter');

class ML extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.Trends = this.Trends.bind(this);
		this.CalculateLogCall = this.CalculateLogCall.bind(this);
		this._rememberValue = this._rememberValue.bind(this);
		this.state = {
			courseraCert: ['https://www.coursera.org/account/accomplishments/certificate/3RLZA3C7PQTX'],
			content: 'Certificates',
			isOpen: false,
			value: null,
			logData: [],
		};
	}
	componentDidMount() {
		this.setState({ logData: this.GenerateValues() });
	}

	_rememberValue(value) {
		this.setState({ value });
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div className="blog jumbotron">
				{this.Nav()}
				{/* {this.Projects()} */}
				{this.Description()}
				{this.Content()}
			</div>
		);
	}

	Description() {
		return (
			<div className="blog-description">
				Machine Learning is a large field with many implimentations. Generally it's the process of learning from
				datasets.
			</div>
		);
	}

	Content() {
		switch (this.state.content) {
			case 'Certificates':
				// console.log(this.state);
				return <img className="ml-image" src={cert} />;
			case 'Projects':
				// console.log('projects', this.state);
				return this.Projects();
		}
	}

	Projects() {
		// below is an attempt to seporate this to another file
		// how do I deal with state values that need to be set and read from?
		// const graph = logGraph({
		// 	logData: this.state.logData,
		// 	OnClick: this.CalculateLogCall(),
		// 	onNearestXYFunc: (value, thing) => {
		// 		return this.setState({ value });
		// 	},
		// 	OnMouseLeave: () => this.setState({ value: false })
		// }); //
		const graph = this.LogGraph();
		// return <LogisticRegression/>

		return graph;
	}

	// ---------------------------------------
	// ---------------------------------------
	CalculateLogCall() {
		console.log('caluculate log called');
		let settings = {
			async: true,
			crossDomain: true,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache',
			},
			processData: false,
			body: JSON.stringify(this.state.logData),
		};
		let url = '/api/mllog';
		fetch(url, settings)
			.then(res => res.json())
			.then(data => console.log(data));
	}

	LogGraph() {
		var train = { red: [], blue: [] };
		this.state.logData.forEach(value => {
			if (value.v === 1) {
				train.red.push({ x: value.x, y: value.y });
			} else {
				train.blue.push({ x: value.x, y: value.y });
			}
		});
		const CHART_MARGINS = { left: 50, right: 10, top: 10, bottom: 25 };
		const markSeriesProps = {
			animation: true,
			className: 'mark-series-example',
			sizeRange: [5, 15],
			seriesId: 'my-example-scatterplot',
			colorRange: ['#EFC1E3', '#59E4EC'],
			opacityType: 'literal',
			data: this.state.logData,
			onNearestXY: (value, thing) => {
				return this.setState({ value });
			},
		};
		return (
			<div>
				<button className="btn-sml btn log-button" onClick={this.CalculateLogCall}>
					Run Logistic Regression
				</button>
				<XYPlot
					className="log-plot"
					width={300}
					height={300}
					margin={CHART_MARGINS}
					onMouseLeave={() => this.setState({ value: false })}
				>
					<Borders
						style={{
							bottom: { fill: '#fff' },
							left: { fill: '#fff', opacity: 0.3 },
							right: { fill: '#fff' },
							top: { fill: '#fff' },
						}}
					/>
					<XAxis />
					<YAxis />
					<MarkSeries {...markSeriesProps} />
					{this.state.value ? <Hint value={this.state.value} /> : null}
				</XYPlot>
			</div>
		);
	}

	GenerateValues() {
		return Array(100)
			.fill(0)
			.map(x => ({
				x: Math.floor(Math.random() * 100),
				y: Math.floor(Math.random() * 100),
				color: Math.floor(Math.random() * 2),
			}));
	}
	// --------------------------------------------
	// --------------------------------------------

	Trends() {
		fetch('/api/twitter')
			.then(res => res.json())
			.then(data => console.log(data));
	}

	Nav() {
		return (
			<div>
				<Navbar className="ml-navbar" color="light" light expand="md">
					{/* <NavbarToggler onClick={this.toggle} /> */}
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{/* <NavItem>
								<NavLink onClick={this.Trends}>Trends</NavLink>
							</NavItem> */}
							<NavItem>
								<NavLink onClick={() => this.setState({ content: 'Certificates' })}>
									Certificates
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={() => this.setState({ content: 'Projects' })}>Projects</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default ML;

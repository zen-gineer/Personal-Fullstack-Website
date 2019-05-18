import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Popup from 'reactjs-popup';
// import Alert from 'react-bootstrap/Alert';
import { XYPlot, XAxis, YAxis, MarkSeries, Hint, Borders } from 'react-vis';
// import { useState } from 'react';
import React, { Component } from 'react';
// import View from 'react-native';
// import ml_eq from '../images/functions.png';
import cert from '../images/Coursera_3RLZA3C7PQTX.png';
import bcert from '../images/berkeley.jpg';
// import model_diagram from '../images/model_diagram.png';
// import update from 'react-addons-update'; // ES6
// import logGraph from './LogisticRegression.jsx';
// const keys = require('../keys');
// const Twitter = require('twitter');

class ML extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.Trends = this.Trends.bind(this);
		this.CalcSklearnLog = this.CalcSklearnLog.bind(this);
		this._rememberValue = this._rememberValue.bind(this);
		this.state = {
			navFontColor: 'white',
			myInput: React.createRef(),
			courseraCert: ['https://www.coursera.org/account/accomplishments/certificate/3RLZA3C7PQTX'],
			content: 'Projects',
			isOpen: false,
			value: null,
			logData: [],
			sklearnLogPredict: null,
			CHART_MARGINS: { left: 50, right: 10, top: 10, bottom: 25 },
			chartBorderStyle: {
				bottom: { fill: '#fff' },
				left: { fill: '#fff', opacity: 0.3 },
				right: { fill: '#fff' },
				top: { fill: '#fff' },
			},
			model: {
				activation: 'relu',
				hidden_nodes: 4,
			},
		};
	}

	componentDidMount() {
		console.log('componentDidMount ', this.state.myInput); //.current.offsetWidth);
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
			<div className="blog z-depth-5">
				{this.Nav()}
				{/* {this.Projects()} */}
				{this.Content()}
			</div>
		);
	}

	Description(place) {
		switch (place) {
			case 'main':
				return (
					<div className="ml-model-outer-box">
						I'm going to run through interactive explinations and calculations of some machine learning
						fundamentals I've learned. This, for my own solidification of knowledge, and for you, in case
						you are interested.
					</div>
				);
			case 'sklearn':
				return (
					<div className="blog-description">
						<p>
							Linear regression is the simplest learning model. It attempts to fit data into a linear
							trend line, Y = W*X + b.
						</p>
						<p>
							Where <strong>X</strong> is an <strong>(n,m)</strong> matrix with rows <strong>(n)</strong>{' '}
							representing each feature, in this simple case, the "x" and "y" axis. and columns{' '}
							<strong>(m)</strong> correspond with the # of data points.
						</p>
						<p>
							<strong>W</strong> is a matrix of <strong>(n,h)</strong> where n is the number of features
							in <strong>X</strong> and <strong>h</strong> is the number of nodes in the next layer.
						</p>
					</div>
				);
		}
	}

	Content() {
		switch (this.state.content) {
			case 'Certificates':
				return (
					<div>
						<img alt="Certificate from Berkeley" className="ml-image-2" src={bcert} />
						<img alt="" className="ml-image" src={cert} />
					</div>
				);
			case 'Projects':
				// console.log('logData', this.state.logData);
				return this.Projects();
			default :
					return (
						<div>
						<img alt="Certificate from Berkeley" className="ml-image-2" src={bcert} />
						<img alt="" className="ml-image" src={cert} />
					</div>
					);
		}
	}

	Projects() {
		// below is an attempt to seporate this to another file
		// how do I deal with state values that need to be set and read from?
		// const graph = logGraph({
		// 	logData: this.state.logData,
		// 	OnClick: this.CalcSklearnLog(),
		// 	onNearestXYFunc: (value, thing) => {
		// 		return this.setState({ value });
		// 	},
		// 	OnMouseLeave: () => this.setState({ value: false })
		// }); //
		return (
			<React.Fragment>
				{this.Description('main')}
				{this.LogGraph()}
			</React.Fragment>
		);
	}

	// ---------------------------------------
	// ---------------------------------------
	CalcSklearnLog() {
		var sendData = {
			task: 'sklearn',
			logData: this.state.logData,
		};
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
			body: JSON.stringify(sendData),
		};
		let url = '/api/mllog';
		fetch(url, settings)
			.then(res => res.json())
			.then(data => {
				var jsonData = JSON.parse(
					data.sklearnLogAscii
						.replace(/'/g, '"')
						.replace(/p/g, 'color')
						.replace(/v/g, 'train_color')
				);
				this.setState({ sklearnLogPredict: jsonData });
				// this.AddSklearnPredictGraph()
			});
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
		const popupStyle = { width: '600px' };
		const markSeriesProps = {
			animation: true,
			className: 'mark-series-example',
			sizeRange: [5, 15],
			seriesId: 'generated-scatter-plot',
			colorRange: ['#EFC1E3', '#59E4EC'],
			opacityType: 'literal',
			data: this.state.logData,
			onNearestXY: value => {
				return this.setState({ value });
			},
		};
		const markSeriesSklearnProps = {
			animation: true,
			className: 'sklearn-scatter-plot',
			sizeRange: [5, 15],
			seriesId: 'my-example-scatterplot',
			colorRange: ['#EFC1E3', '#59E4EC'],
			opacityType: 'literal',
			data: this.state.sklearnLogPredict,
			onNearestXY: value => {
				return this.setState({ value });
			},
		};
		// console.log('sklearnLogPlot: ', markSeriesSklearnProps);
		return (
			<div className="blog-description log-plot-outer-div">
				{this.Description('sklearn')}
				<Popup
					contentStyle={popupStyle}
					className="button-popup"
					trigger={
						<button
							className="row log-plot-setup-divs btn-sml btn log-button"
							onClick={this.CalcSklearnLog}
						>
							Run python sklearn's Linear Regression
						</button>
					}
					position="right center"
					on="hover"
				>
					<embed
						className="readme"
						src="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html"
					/>
				</Popup>

				<div className="log-plot-setup-divs row">
					<div className="log-plot cl-sm-6">
						<XYPlot
							width={250}
							height={250}
							margin={{ left: 50, right: 10, top: 10, bottom: 25 }}
							onMouseLeave={() => this.setState({ value: false })}
						>
							<Borders style={this.state.ChartBorderStyle} />
							<XAxis />
							<YAxis />
							<MarkSeries {...markSeriesProps} />
							{this.state.value ? <Hint value={this.state.value} /> : null}
						</XYPlot>
					</div>
					<div className="log-plot cl-sm-6">
						<XYPlot
							width={250}
							height={250}
							margin={this.state.CHART_MARGINS}
							onMouseLeave={() => this.setState({ value: false })}
						>
							<Borders style={this.state.chartBorderStyle} />
							<XAxis />
							<YAxis />
							{this.state.sklearnLogPredict ? <MarkSeries {...markSeriesSklearnProps} /> : null}
							{this.state.value ? <Hint value={this.state.value} /> : null}
						</XYPlot>
					</div>
				</div>
				<div className="log-plot-setup-divs row">
					<p className="data-chart-description col-sm-6">Randomly generated training data</p>
					<p className="col-sm-6">
						{this.state.sklearnLogPredict ? "Predicted colors from python's sklearn library" : ''}
					</p>
				</div>
				{this.state.sklearnLogPredict ? this.MyLogReg() : null}
			</div>
		);
	}

	MyLogReg() {
		return (
			<div className="row model-drawing-outer">
				<div className="blog-description row ">
					<h4 className="blog-description row">Our Model</h4>
				</div>

				<div className="row model-drawing">
					<ButtonToolbar>
						<DropdownButton
							title={'activation (' + this.state.model.activation + ')'}
							variant="primary"
							id="activation"
							key="activation"
							// className="model-dropdowns"
						>
							{['relu', 'tanh'].map(option => (
								<Dropdown.Item
									className="model-dropdowns"
									eventKey={option}
									onSelect={(eventKey, event) => {
										console.log('eventKey: ', eventKey, 'event: ', event);
										this.state.model.activation = eventKey;
										this.forceUpdate();
										console.log('model: ', this.state.model);
									}}
								>
									{option}
								</Dropdown.Item>
							))}
						</DropdownButton>
						<DropdownButton
							title={'# nodes in hidden layer (' + this.state.model.hidden_nodes + ')'}
							variant="primary"
							id="hidden_nodes"
							key="hidden_nodes"
							// className="model-dropdowns"
						>
							{[2, 3, 4, 5, 6].map(option => (
								<Dropdown.Item
									className="model-dropdowns"
									eventKey={option}
									onSelect={(eventKey, event) => {
										console.log('eventKey: ', eventKey, 'event: ', event);
										this.state.model.hidden_nodes = eventKey;
										this.forceUpdate();
										console.log('model: ', this.state.model);
									}}
								>
									{option}
								</Dropdown.Item>
							))}
						</DropdownButton>
						<button id="activation" onClick={this.CalcMyLog}>
							Run Logistic Regression
						</button>
					</ButtonToolbar>
					<div className="row ">
						<div className="col-sm-3 model-input-layer">
							Input Layer
							<div className="model-nodes" key="1">
								x<sub>1</sub>
							</div>
							<div className="model-nodes" key="2">
								x<sub>2</sub>
							</div>
						</div>
						<div className="col-sm-3 model-hidden-layer">
							Hidden Layer
							<br />
							{this.state.model.activation}
							{this.DrawHiddenNodes()}
						</div>
						<div className="col-sm-3 model-output-layer">
							Output Layer
							<br />
							sigmoid
							<div className="model-nodes">Out</div>
						</div>
					</div>
					<div className=" row blog-form">
						<div className="col-sm-3 model-hidden-layer" />
						<div className="col-sm-3 model-hidden-layer">
							<p>
								z<sup>[1](i)</sup> = W<sup>[1]</sup>X<sup>(i)</sup> + b<sup>[1]</sup>
								<br />a<sup>[1](i)</sup> = {this.state.model.activation}(z<sup>[1](i)</sup>)
								<br />
							</p>
						</div>
						<div className="col-sm-3 model-output-layer">
							<p>
								z<sup>[2](i)</sup> = W<sup>[2]</sup>a<sup>[1](i)</sup> + b<sup>[1]</sup>
								<br />ŷ<sup>(i)</sup> = a<sup>[1](i)</sup> = sigmoid(z<sup>[1](i)</sup>)
								<br />
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<h4>Activation Functions</h4>
				</div>
				<div className="row">
					<h4>Activation Functions</h4>
				</div>
			</div>
		);
	}

	CalcMyLog() {
		var sendData = {
			task: 'myLog',
			logData: this.state.logData,
			model: this.state.model,
		};
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
			body: JSON.stringify(sendData),
		};
		let url = '/api/mllog';
		fetch(url, settings)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// var jsonData = JSON.parse(
				// 	data.sklearnLogAscii
				// 		.replace(/'/g, '"')
				// 		.replace(/p/g, 'color')
				// 		.replace(/v/g, 'train_color')
				// );
				// this.setState({ sklearnLogPredict: jsonData });
				// this.AddSklearnPredictGraph()
			});
	}

	DrawHiddenNodes() {
		var views = [];
		var i = 1;
		for (i; i <= this.state.model.hidden_nodes; i++) {
			views.push(
				<div className="model-nodes">
					{'a'}
					<sub>{i}</sub>
					<sup>[1]</sup>
				</div>
			);
		}
		return views;
	}

	GenerateValues() {
		//100 datapoints, 2-d, r=a*sin(nTheta)

		//x=r*cos(Theta), y=r*sin(Theta)
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
				<Navbar className="ml-navbar" color="dark" light expand="md">
					{/* <NavbarToggler onClick={this.toggle} /> */}
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{/* <NavItem>
								<NavLink onClick={this.Trends}>Trends</NavLink>
							</NavItem> */}
							<NavItem>
								<NavLink onClick={() => this.setState({ content: 'Certificates' })}>
									<font color={this.state.navFontColor}>Certificates</font>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={() => this.setState({ content: 'Projects' })}>
									<font color={this.state.navFontColor}>Projects</font>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default ML;

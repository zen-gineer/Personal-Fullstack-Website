import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Alert from 'react-bootstrap/Alert';
import { XYPlot, XAxis, YAxis, MarkSeries, Hint, Borders } from 'react-vis';
import React, { Component } from 'react';
// import image1 from '../images/ml.png';
import cert from '../images/Coursera_3RLZA3C7PQTX.png';
import bcert from '../images/berkeley.jpg';
import model_diagram from '../images/model_diagram.png';
// import logGraph from './LogisticRegression.jsx';
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
				{/* {this.Description()} */}
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
				return (
					<div>
						<img className="ml-image-2" src={bcert} />
						<img className="ml-image" src={cert} />
					</div>
				);
			case 'Projects':
				// console.log('logData', this.state.logData);
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
		return <div>{this.LogGraph()}</div>;
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
		const markSeriesProps = {
			animation: true,
			className: 'mark-series-example',
			sizeRange: [5, 15],
			seriesId: 'my-example-scatterplot',
			colorRange: ['#EFC1E3', '#59E4EC'],
			opacityType: 'literal',
			data: this.state.logData,
			onNearestXY: value => {
				return this.setState({ value });
			},
		};
		const markSeriesSklearnProps = {
			animation: true,
			className: 'mark-series-example',
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
			<div className=" log-plot-outer-div">
				<button className="log-plot-setup-divs row btn-sml btn log-button" onClick={this.CalculateLogCall}>
					Run Logistic Regression
				</button>
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
			<div className="row">
				{/* <Alert key="1" variant='primary'>
					This is an alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
					you like.
				</Alert> */}

				<ButtonToolbar>
					{[
						{ category: 'avtivation', options: ['relu', 'tanh'] },
						{ category: 'hidden_nodes', options: [2, 4] },
					].map(button => {
						console.log('cat: ', button.category, 'options: ', button.options);
						var category = button.category
						return (
							<DropdownButton
								title={button.category}
								variant="primary"
								id={button.category}
								key={button.category}
								onClick={()=>this.setState({buttonClicked: button.category})}
							>
								{button.options.map(option => (
									<Dropdown.Item eventKey={option} onSelect={(eventKey, event)=>{
										console.log("eventKey: ",eventKey, "event: ",event);
										this.setState({model: {category: eventKey}})
										console.log("model: ", this.state.model)
									}
									}>{option}</Dropdown.Item>
								))}
							</DropdownButton>
						);
					})}
				</ButtonToolbar>
				<img className="ml-image" src={model_diagram} />
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

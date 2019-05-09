import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, MarkSeries, Hint, Borders } from 'react-vis';

export default function logGraph(props) {
	const {logData, OnClick, onNearestXYFunc, OnMouseLeave} = props;
	console.log(props)
	var train = { red: [], blue: [] };
	logData.forEach(value => {
		if (value.v === 1) {
			train.red.push({ x: value.x, y: value.y });
		} else {
			train.blue.push({ x: value.x, y: value.y });
		}
	});
	// console.log("train: ",train)
	// const { LEFT, RIGHT, TOP, BOTTOM_EDGE, RIGHT_EDGE, TOP_EDGE } = Hint.ALIGN;
	const CHART_MARGINS = { left: 50, right: 10, top: 10, bottom: 25 };
	const YMAX = 20;
	const markSeriesProps = {
		animation: true,
		className: 'mark-series-example',
		sizeRange: [5, 15],
		seriesId: 'my-example-scatterplot',
		colorRange: ['#EFC1E3', '#59E4EC'],
		opacityType: 'literal',
		data: logData,
		onNearestXY: onNearestXYFunc
		};
	return (
		<div>
			<button
				className="btn-sml btn log-button"
				onClick={OnClick}
				buttonContent={'Run Logistic Regression'}
			>
				Run Logistic Regression
			</button>
			<XYPlot
				className="log-plot"
				width={300}
				height={300}
				margin={CHART_MARGINS}
				onMouseLeave={OnMouseLeave}
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
				{/* <MarkSeries data={train.red} color="red" />
				<MarkSeries data={train.blue} color="blue" /> */}
				{this.state.value ? (
					<Hint align={{ horizontal: 'bottom', vertical: 'left' }} value={this.state.value} />
				) : null}
			</XYPlot>
		</div>
	);
}

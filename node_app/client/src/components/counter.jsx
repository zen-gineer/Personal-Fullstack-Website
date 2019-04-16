//simple react snippet extention react shortcuts
//cc: create class, imrc: import react component
import React, { Component } from 'react';
import Request from 'superagent';

class Counter extends Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

	styles = {
		fontSize: 10,
		fontWeight: 'bold',
	};

	render() {
    // this.apiCall()
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
				<ul>
					{this.state.tags.map(tag => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
  }
  
  apiCall(){
    var url = "http://localhost/health";
    Request.get(url).then((response => {
      console.log(response)
    }))
    
  }
}

export default Counter;

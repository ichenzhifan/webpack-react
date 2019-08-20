import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { autobind } from 'core-decorators'

import './index.scss';

const Wrap = Comp => {
	return class extends Component {
		render() {
			return <Comp {...this.props} />;
		} 
	};
};

const log = (target, name, descriptor) => {
	const oldValue = descriptor.value;

	descriptor.value = function(...rest){
		console.log(`Calling ${name} with`);
		return oldValue.apply(this, rest);
	}

	return descriptor;
}

@Wrap
class Home extends Component {
	constructor(props) {
		super(props);

		this.a = 10;
		this.b = 20;
	}

	@autobind
	@log
	add(){
		return alert(this.a + this.b);
	}

	render() {
		const obj = Object.assign({}, { a: 1 });

		return <h1 onClick={this.add}>this is home</h1>;
	}
}

ReactDom.render(<Home />, document.getElementById('app'));

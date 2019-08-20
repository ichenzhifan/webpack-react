import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './redux';

import { autobind } from 'core-decorators';
import List from './components/list';

import './index.scss';
import {mapStateToProps} from './selector/state';
import {mapDispatchToProps} from './selector/dispatch';

const Wrap = Comp => {
	return class extends Component {
		render() {
			return <Comp {...this.props} />;
		}
	};
};

const log = (target, name, descriptor) => {
	const oldValue = descriptor.value;

	descriptor.value = function(...rest) {
		console.log(`Calling ${name} with`);
		return oldValue.apply(this, rest);
	};

	return descriptor;
};

@connect(mapStateToProps,	mapDispatchToProps)
@Wrap
class Home extends Component {
	constructor(props) {
		super(props);

		this.a = 10;
		this.b = 20;
	}

	@autobind
	@log
	add() {
		return alert(this.a + this.b);
	}

	render() {
		const obj = Object.assign({}, { a: 1 });

		const listProps = {
			users: this.props.users,
			addUsers: this.props.userActions.add
		};

		return <List {...listProps} />;
	}
}

ReactDom.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('app')
);

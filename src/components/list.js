import React, { useState, useEffect } from 'react';
import Item from './item';
import emitter from '../utils/event';

export default props => {
	const [items, setItems] = useState(props.users);

	const fn = data => {
		const { name, age, cb } = data;
		console.log('items', items);

		props.addUsers({
			name: `${name}-copy`,
			age
		});

		setTimeout(function() {
			// cb && cb.apply(this);
		}, 1000);
	};

	useEffect(() => {
		setItems([...props.users]);
	}, [props.users.length]);

	useEffect(() => {
		const ev = emitter.once('on-click-item', fn);

		return () => {
			ev.remove();
		};
	});

	return items.map((item, index) => {
		return <Item key={index} {...item} />;
	});
};

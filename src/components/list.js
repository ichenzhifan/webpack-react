import React, { useState, useEffect, useMemo } from 'react';
import Item from './item';
import emitter from '../utils/event';
import { Map } from 'immutable';

export default props => {
	const [items, setItems] = useState(props.users);

	const fn = data => {
		const { name, age, cb } = data;
		console.log('items', items);

		props.addUsers(
			Map({
				name: `${name}-copy`,
				age
			})
		);

		setTimeout(function() {
			// cb && cb.apply(this);
		}, 1000);
	};

	useEffect(() => {
		setItems(props.users);
	}, [props.users.size]);

	useEffect(() => {
		const ev = emitter.once('on-click-item', fn);

		return () => {
			ev.remove();
		};
	});

	return items.map((item, index) => {
		const itemProps = {
			name: item.get('name'),
			age: item.get('age'),
			key: index
		};

		return <Item {...itemProps} />;
	});
};

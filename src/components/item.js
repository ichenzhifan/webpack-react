import React, { useEffect } from 'react';
import emitter from '../utils/event';

function onClickItem(props) {
	const { name, age } = props;

	emitter.emit('on-click-item', {
		name,
		age,
		cb: () => {
			alert('done');
		}
	});
}

export default props => {
	const { name, age } = props;

	return (
		<div className="item" onClick={() => onClickItem(props)}>
			<span>{name}</span>
			<span>{age}</span>
		</div>
	);
};

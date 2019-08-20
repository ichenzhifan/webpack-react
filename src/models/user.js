// types
const ADD_USER = 'ADD_USER';

// actions
export const add = (payload) => {
	return { type: ADD_USER, payload };
};

// state
const defaultState = [
	{ name: 'Denver', age: 24 },
	{ name: 'Jack', age: 34 },
	{ name: 'Tom', age: 32 },
	{ name: 'Jerry', age: 18 }
];

// reducer
export const demoReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_USER:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default demoReducer;

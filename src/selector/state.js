import { createSelector } from 'reselect';
// import { get } from 'lodash';

const users = state => state.get('user');

const getUsers = createSelector(
	users,
	items => items
);

export const mapStateToProps = state => ({
	users: getUsers(state)
});

import { bindActionCreators } from 'redux';

import * as user from '../models/user';

export const mapDispatchToProps = dispatch => ({
  // system
  userActions: bindActionCreators(user, dispatch)
});
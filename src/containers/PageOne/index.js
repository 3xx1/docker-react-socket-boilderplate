import { connect } from 'react-redux';

import PageOne from './template';
import * as PageOneActions from './redux/actions';

const mapStateToProps = (state) => {
  return {
    value1: state.get('pageOne').get('value'),
    value2: state.get('pageTwo').get('value')
  }
};

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(PageOneActions.increment()),
  onDecrement: () => dispatch(PageOneActions.decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageOne);

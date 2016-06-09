import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './redux/actions';
import {Map} from './index';
// function mapStateToProps(state) {
//   return { ...state.reducer };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// }

// const Foo = () => {
//     return <h1>hola</h1>;
// };
// @connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    sample: React.PropTypes.object,
    actions: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
  }
  state = {
    kuch: null,
  }
  render() {
    console.log(this.props);
    return (
      <div>
       {this.props.children}
      </div>
    );
  }
}

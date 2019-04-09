import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveToken } from '../../store/action'
import PropTypes from 'prop-types'

class Hello extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    saveToken: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <input type="text" ref="ipt" />
        <button onClick={this.props.saveToken.bind(this)}>添加</button>
        <h2>{this.props.token}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
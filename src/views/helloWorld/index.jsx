import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { saveToken } from '@/store/action';
// import PropTypes from 'prop-types'

class Hello extends Component {
  // static propTypes = {
  //   token: PropTypes.string.isRequired,
  //   saveToken: PropTypes.func.isRequired,
  // }
  render() {
    return (
      <div>
        <span>hello world</span>
        <input type="text" ref="ipt" />
        <button onClick={this.add.bind(this)}>添加</button>
        <span>{this.props.token}</span>
        <Button type="primary">This is a button</Button>
      </div>
    )
  }
  add = () => {
    this.props.saveToken(this.refs.ipt.value)
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
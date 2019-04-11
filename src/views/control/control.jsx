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
  state = {
    word: 'hello world',
    test: '测试参数',
  }
  render() {
    return (
      <div className="hello">
        <span>{this.state.word}</span>
        <input type="text" ref="ipt" />
        <button onClick={this.add.bind(this)}>添加</button>
        <span>{this.props.token}</span>
        <Button type="primary" onClick={this.goTest.bind(this)}>TEST BUTTON</Button>
      </div>
    )
  }
  add = () => {
    this.props.saveToken(this.refs.ipt.value)
    this.setState({
      word: '添加成功!'
    })
  }
  goTest = () => {
    this.props.history.push(`/test/${this.state.test}`)
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
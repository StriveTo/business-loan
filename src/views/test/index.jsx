import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveToken } from '@/store/action';
// import PropTypes from 'prop-types'

class Test extends Component {
  // static propTypes = {
  //   token: PropTypes.string.isRequired,
  //   saveToken: PropTypes.func.isRequired,
  // }
  render() {
    return (
      <div className="test">
        <span>{this.props.match.params.test}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
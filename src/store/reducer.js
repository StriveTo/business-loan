import * as user from './action-type'

const states = {
  token: '',
}

// 用户消息
export default (state = states, action = {}) => {
  switch (action.type) {
    case user.SAVE_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}
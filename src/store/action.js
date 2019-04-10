import * as user from './action-type'

// 保存用户标识
export const saveToken = (token) => {
  return {
    type: user.SAVE_TOKEN,
    token
  }
}


import {
  http
} from './http.js'

module.exports = {
  userLogin(params) {
    return http({
      url:'/rest/server/user/web/login',
      data: params,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  },
}
import MUtil from 'util/mm.jsx'
const _mm = new MUtil()

class User {
  login(loginInfo) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/login.do',
      data: loginInfo
    })
  }
  logout() {
    return _mm.request({
      type: 'post',
      url: '/user/logout.do'
    })
  }
  getUserList(pageNum) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/logout.do',
      data: {
        pageNum: pageNum
      }
    })
  }
}

export default User;
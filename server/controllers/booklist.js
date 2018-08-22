const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
  try {
    const { page, openid } = ctx.request.query
    const size = 10
    const mysqlSelect = mysql('books')
      .select('books.*', 'cSessionInfo.user_info')
      .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
      .orderBy('books.id', 'desc')

    let books
    if (openid) {
      books = await mysqlSelect.where('books.openid', openid)
    } else {
      books = await mysqlSelect.limit(size)
        .offset(Number(page) * size)
    }

    ctx.state.data = {
      list: books.map(v => {
        const info = JSON.parse(v.user_info)
        return Object.assign({}, v, {
          user_info: {
            nickName: info.nickName
          }
        })
      }),
      msg: 'success'
    }
  } catch (error) {
    ctx.state = {
      code: -1,
      data: {
        msg: '获取图书列表失败' + error.sqlMessage
      }
    }
  }
}

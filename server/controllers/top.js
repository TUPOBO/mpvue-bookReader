const {
  mysql
} = require('../qcloud')

module.exports = async (ctx) => {
  try {
    const top = await mysql('books')
      .select('id', 'title', 'image', 'count')
      .orderBy('count', 'desc')
      .limit(9)

    console.log(top)

    ctx.state.data = {
      list: top
    }
  } catch (error) {
    ctx.state = {
      code: -1,
      msg: '获取轮播图列表失败' + error.sqlMessage
    }
  }
}

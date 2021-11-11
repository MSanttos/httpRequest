const connection = require('./connection')

const Post = connection.sequelize.define('postagens', {
  titulo: {
    type: connection.Sequelize.STRING,
    allowNull: false
  },
  conteudo: {
    type: connection.Sequelize.TEXT,
    allowNull: false
  }
})

//Post.sync({force: true})

module.exports = Post



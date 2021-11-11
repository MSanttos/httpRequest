const Sequelize = require('sequelize')

const sequelize = new Sequelize('postapp', 'root', 'cogumelo8998',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
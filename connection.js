const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'cogumelo8998',{
  host: 'localhost',
  dialect: 'mysql'
})

//not needed block
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})

// const Postagem = sequelize.define('postagens', {
//   titulo: {
//     type: Sequelize.STRING
//   },
//   conteudo: {
//     type: Sequelize.TEXT
//   }
// })

// sequelize.sync({force: true}).then(() => {
//   Postagem.create({
//     titulo: 'Primeira postagem',
//     conteudo: 'Conteudo da primeira postagem'
//   })
// })

// const Usuario = sequelize.define('usuarios', {
//   nome: {
//     type: Sequelize.STRING
//   },
//   sobrenome: {
//     type: Sequelize.STRING
//   },
//   idade: {
//     type: Sequelize.INTEGER
//   },
//   email: {
//     type: Sequelize.STRING
//   }
// })

// sequelize.sync({force: true}).then(() => {
//   Usuario.create({
//     nome: 'João',
//     sobrenome: 'Silva',
//     idade: 20,
//     email: 'joao@teste.com.br'
//   })
// })


//sequelize.sync({force: true})
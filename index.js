const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3001
const Post = require('./models/Posts')

//Settings 🔧🔨
  // Configure Handlebars
  app.engine('handlebars', handlebars({ defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  }))
  app.set('view engine', 'handlebars')
  // Configure body-parser
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
//

//Routes
app.get('/', (req, res) => {
  Post.findAll({order:[['id', 'DESC', ]]})
    .then(posts => {
      res.render('home', { posts })
    })
})

app.get('/send', (req, res) => {
  res.render('formulario')
})

app.post('/received', (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(() => {
    res.redirect('/')
    //res.send('Received')
    res.redirect('/')
  }).catch(err => {
    res.send('Error: ' + err.message)
  })
})

app.use(express.json())

app.listen(port, () => {
  console.log('Server is running on port http://localhost:3001')
})

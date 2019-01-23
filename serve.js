const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Port
let port = process.env.PORT || 8080;

// Use hbs for render engine)
app.set('view engine', 'hbs');
// Partials o codigo que se repite
hbs.registerPartials(__dirname + '/views/partials');



app.get('/',(req,res)=>{  
  res.render('home', {
    name: 'Victor AT'
  });
});

app.get('/about',(req,res)=>{  
  res.render('about');
});

app.listen(port, ()=> console.log(`Trabajando en el puerto ${port}`));

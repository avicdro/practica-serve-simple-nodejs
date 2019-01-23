const hbs = require('hbs');


// Helpers hbs
hbs.registerHelper('getYear',()=>{
  return new Date().getFullYear();
})
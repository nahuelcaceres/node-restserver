require('./config/config');

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended:false}));

app.use(bodyparser.json());

app.get('/user', function (req, res) {
  res.json('get User');
});

app.post('/user', function (req, res) {
    
    let body = req.body;
    
    if (body.nombre == undefined){

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    }
    else{
        
        res.json({
            persona: body
        });
    }
});

app.put('/user/:id', function (req, res) {
  
    let id = req.params.id;

    res.json({
      id
    });

});

app.delete('/user', function (req, res) {
  res.json('delete User');
});
 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando en puerto: ', "3001");
});
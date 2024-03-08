const path = require('path');
const express = require('express');
const app = express();

const mainRoutes = require('./routes/main.routes');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',mainRoutes);



app.listen(3000);
const path = require('path');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const createSessionConfig = require('./config/session');
const expressSession = require('express-session');

const mainRoutes = require('./routes/main.routes');
const pushRoutes = require('./routes/push.routes');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const AuthMiddlewares = require('./middlewares/check-auth');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(expressSession(createSessionConfig()));
app.use(express.static('public'));
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cookieParser());


app.use('/admin',AuthMiddlewares.checkAdmin, adminRoutes);
app.use('/', authRoutes);
app.use('/',pushRoutes);
app.use('/', AuthMiddlewares.checkAuthStatus, mainRoutes);



app.listen(3000);
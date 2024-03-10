const path = require('path');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const createSessionConfig = require('./config/session');

const pushRoutes = require('./routes/push.routes');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const baseRoutes = require('./routes/base.routes');
const settingRoute = require('./routes/setting.routes');

const AuthMiddlewares = require('./middlewares/check-auth');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(expressSession(createSessionConfig()));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.use('/', baseRoutes);
app.use('/login', authRoutes);
app.use('/admin',AuthMiddlewares.checkAdmin, adminRoutes);
app.use('/push', AuthMiddlewares.checkAuth, pushRoutes);
app.use('/setting', AuthMiddlewares.checkAuth, settingRoute);



app.listen(3000);
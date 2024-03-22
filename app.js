const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const createSessionConfig = require('./config/session');
const helmetConfig = require('./config/helmetConfig');

const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const baseRoutes = require('./routes/base.routes');
const settingRoute = require('./routes/setting.routes');

const AuthMiddlewares = require('./middlewares/check-auth');
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(helmet(helmetConfig));
  
app.use(expressSession(createSessionConfig()));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.use('/', baseRoutes);
app.use('/login', authRoutes);
app.use('/admin',AuthMiddlewares.checkAdmin, adminRoutes);
app.use('/setting', AuthMiddlewares.checkAuth, settingRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.listen(3000,()=>{
    console.log("Server is running at port : " + 3000);
});
const {  authRoute } = require('./routes.index');
// const { authenticator } = require('../middlewares/middlewares.index');

exports.assignRoutes = app => { 
	authRoute.assignRoutes(app);
};

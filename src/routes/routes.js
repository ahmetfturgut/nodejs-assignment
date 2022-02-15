const {  recordRoute } = require('./routes.index'); 

exports.assignRoutes = app => { 
	recordRoute.assignRoutes(app);
};

const mongoose = require('mongoose');
const { config } = require('../../src/config/config');

const setupTestDBAndConnection = () => {
	before(async () => {
		await mongoose.connect(config.db_config.connStr, {
			useNewUrlParser: true,
			autoIndex: false,
			useUnifiedTopology: true
		});

		console.log(`%cMongo connection: ${config.db_config.connStr}`, 'color: green');
 
	}); 

	after(async () => {
		await mongoose.disconnect();
		console.log(`%cMongo disconnected`, 'color: green');

	 
	});
};

module.exports = setupTestDBAndConnection;

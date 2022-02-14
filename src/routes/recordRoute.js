const { recordController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { apiResponse, validate } = require('../middlewares/middlewares.index');
const { recordValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {
	/**
	 * Search
	 */
	app.post(
		requestUtil.getUrlPrefix('record/search'),
		validate(recordValidation.search),
		recordController.search,
		apiResponse.send
	);
};




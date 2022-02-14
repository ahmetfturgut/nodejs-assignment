const Status = require('http-status');
const { recordService } = require('../service/service.index');


exports.search = async (req, res, next) => {
	try {
		const result = await recordService.search(req.body);

		res.apiResponse = {
			status: Status.OK,
			code: 0,
			message: 'Success',
			data: result.data,
		};
	} catch (error) {
		res.apiResponse = {
			status: Status.BAD_REQUEST,
			code: Status.BAD_REQUEST,
			message: error.message,
			data: null
		};
	}

	next();
};
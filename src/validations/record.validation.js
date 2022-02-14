const Joi = require('joi')
    .extend(require('@joi/date'));

const search = {

	body: Joi.object()
		.keys({
			startDate: Joi.date().format('YYYY-MM-DD'), 
			endDate: Joi.date().format('YYYY-MM-DD'), 
			minCount: Joi.number(),
			maxCount: Joi.number(),
		})

};


module.exports = {
	search
};

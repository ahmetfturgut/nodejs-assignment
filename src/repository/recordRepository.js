const { Record } = require('../model/record');

/**
 * @description Gets records
 *
 * @returns {Promise<[{records}]>}
 * records object array
 */
exports.search = async (filters) => {
	try {
		return Record.aggregate([
			{
				$project: {
					"_id": 0, "key": 1, "createdAt": 1, "totalCount": { "$sum": "$counts" }
				}
			},
			{
				$match: {
					"createdAt": { $gte: new Date(filters.startDate), $lte: new Date(filters.endDate) },
					"totalCount": { $gte: filters.minCount, $lte: filters.maxCount }
				}
			}
		]);
	} catch (error) {
		throw error;
	}
};

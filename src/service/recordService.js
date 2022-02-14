const { recordRepository } = require('../repository/repository.index'); 

/**
 * @description Gets records
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: [*]}>}
 * {success: false, error: any} or {success: true, data: [records]}
 */
exports.search = async (filters) => {
	try {
		const records = await recordRepository.search(filters);

		return { success: true, data: records };
	} catch (error) {
		throw { success: false, error: error };
	}
};
 
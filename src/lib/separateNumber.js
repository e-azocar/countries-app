/**
 * @param {Number} x Number to separate with commas
 * @returns {String}
 */

const separateNumber = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default separateNumber

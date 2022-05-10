function getMinMax(str) {

	let numbers = str.split(' ')
  								 .filter(Number);
	let result = new Object();
	result.min = Math.min(...numbers);
	result.max = Math.max(...numbers);
	return result;
}
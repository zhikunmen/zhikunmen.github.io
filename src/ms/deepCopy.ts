function deepCopy(arr) {
	if (typeof arr != 'object') return arr;
	let newObj = arr instanceof Array ? [] : {};
	for (let key in arr) {
		if (!newObj.hasOwnProperty(key)) {
			newObj[key] = typeof arr[key] === 'object' ? deepCopy(arr[key]) : arr[key];
		}
	}
	return newObj;
}
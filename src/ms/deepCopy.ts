function deepCopy(oldObj) {
	if (typeof oldObj != 'object') return oldObj;
	let newObj = oldObj instanceof Array ? [] : {};
	for (let key in oldObj) {
		if (!newObj.hasOwnProperty(key)) {
			newObj[key] = typeof oldObj[key] === 'object' ? deepCopy(oldObj[key]) : oldObj[key];
		}
	}
	return newObj;
}
class ms3 {
	public constructor(arr: number[]) {
		console.log(allRange(arr));
	}
}

/**二维数组解决 */
function allRange(arr: number[]) {
	let length = arr.length;
	if (length == 1) {
		return arr;
	} else if (length == 2) {
		return [[arr[0], arr[1]], [arr[1], arr[0]]];
	} else {//三个及以上
		let temp =  [];
		for (var i = 0; i < length; i++) {
			let save = arr[i];
			arr.splice(i, 1);
			let res = allRange(arr);
			arr.splice(i, 0, save);
			for (let j = 0; j < res.length; j++) {
				res[j].push(arr[i]);
				temp.push(res[j])
			}
		}
		return temp;
	}
}

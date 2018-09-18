class ms4 {
	public constructor(arr: number[]) {
		func(arr);
	}
}


function func(arr: number[]) {
	arr.sort();
	let repeatArr = [];
	for (let i = 0; i < arr.length;) {
		console.log(i);
		let item = arr[i];
		if (arr.indexOf(item) != arr.lastIndexOf(item)) {
			repeatArr.push(item);
			i = arr.lastIndexOf(item) + 1;
		} else {
			i++;
		}
	}
	console.log(repeatArr);
}
class topK {
	public constructor(arr: number[]) {
		let temp = topKFunc(arr);
		temp.forEach((f, i) => {
			arr[i] = f;
		})

		var callBack = () => {
			console.log("111");
		}


		var a = new Promise((resolve, reject) => {
			resolve();
			console.log("2");
		}).then(function () { return callBack() });
		console.log(a);
	}
}

function topKFunc(arr: number[]) {
	let tempArr = arr.concat().slice(0, 100);
	tempArr.sort((a, b) => { return b - a });
	arr.forEach((e) => {
		if (e > tempArr[tempArr.length - 1]) {//大于最小的
			tempArr.pop();
			tempArr.push(e);
			tempArr.sort((a, b) => { return b - a });
		}
	})
	return arr = tempArr;
}

class BinarySearchClass {
	public constructor() {
		let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];;
		console.log(BinarySearch(a, 9));
	}
}

function BinarySearch(arr: number[], key: number, low: number = 0, high: number = arr.length) {
	if (low == high) {
		if (arr[low] == key) {
			return low;
		} else {
			return -1;//二分查找也没有找到
		}
	}
	let middle = Math.floor((low + high) / 2);
	if (arr[middle] == key) {
		return middle;
	}
	if (arr[middle] > key) {
		BinarySearch(arr, key, low, middle);
	} else if (arr[middle] < key) {
		BinarySearch(arr, key, middle, arr.length);
	}
}
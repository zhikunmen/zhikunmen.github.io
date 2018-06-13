module sort {
	export class mergeSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]) {
			let tmp = arr.concat();
			tmp = this.mergetSort(tmp);
			for (let i = 0; i < tmp.length; i++) {
				arr[i] = tmp[i];
			}
		}

		private mergetSort(arr: number[]): number[] {
			if (arr.length <= 1) return arr;
			var mid = Math.floor(arr.length / 2);//向下取整 拿中间值
			var left_arr = arr.slice(0, mid);
			var right_arr = arr.slice(mid, arr.length);
			return this.merge(this.mergetSort(left_arr), this.mergetSort(right_arr));
		}

		private merge(left: number[], right: number[]): number[] {
			var tmp = [];
			while (left.length && right.length) {
				if (left[0] < right[0]) {
					tmp.push(left.shift());
				} else {
					tmp.push(right.shift());
				}
			}
			return tmp.concat(left, right);
		}
	}
}
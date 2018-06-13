module sort {
	export class quickSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]) {
			let qarr = this.quick(arr.concat());
			for (let i = 0; i < qarr.length; i++) {
				arr[i] = qarr[i];
			}
		}

		private quick(arr: number[]): number[] {
			if (arr.length <= 1) {
				return arr;
			}

			let leftArr = [];
			let rightArr = [];
			let q = arr[0];
			for (let i = 1, l = arr.length; i < l; i++) {
				if (arr[i] > q) {
					rightArr.push(arr[i]);
				} else {
					leftArr.push(arr[i]);
				}
			}

			return [].concat(this.quick(leftArr), [q], this.quick(rightArr));
		}
	}
}
module sort {
	export class insertSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]) {
			for (let i = 1; i <= arr.length - 1; i++) {
				let j = i;
				while (j > 0) {
					if (arr[j - 1] > arr[j]) {
						let tmp = arr[j]
						arr[j] = arr[j - 1];
						arr[j - 1] = tmp;
					}
					j--;
				}
			}
		}
	}
}
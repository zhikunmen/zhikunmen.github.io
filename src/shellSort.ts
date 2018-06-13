module sort {
	export class shellSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]) {
			let dk = Math.floor(arr.length / 2);
			while (dk >= 1) {
				this.inserSort(arr, dk);
				dk = Math.floor(dk / 2);
			}
		}

		public inserSort(arr: number[], dk: number) {
			var i = dk, j, key;
			for (; i < arr.length; i++) {
				j = i;
				while (j >= 0) {
					key = arr[j];
					if (arr[i] < arr[j]) {
						arr[j] = arr[i];
						arr[i] = key;
					}
					j -= dk;
				}
			}
		}
	}
}
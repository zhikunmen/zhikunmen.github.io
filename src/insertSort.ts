module sort {
	export class insertSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]) {
			var i = 1, j, step, key;
			for (; i < arr.length; i++) {
				step = j = i;
				key = arr[j];
				while (--j > -1) {
					if (arr[j] > key) {
						arr[j + 1] = arr[j];
					} else {
						break;
					}
				} 
				arr[j+1] = key;
			}
		}
	}
}
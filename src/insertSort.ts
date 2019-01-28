module sort {
	export class insertSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}
		public init(arr: number[]) {
			var temp;
			for (let i = 1; i < arr.length; i++) {
				let j = i;
				temp = arr[j];
				while (j > 0 && arr[j - 1] > temp) {
					arr[j] = arr[j - 1];
					j--;
				}
				arr[j] = temp;
			}
		}
	}
}
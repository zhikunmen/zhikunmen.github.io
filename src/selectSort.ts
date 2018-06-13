module sort {
	//选择排序
	export class selectSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]): void {
			for (let i = 1; i < arr.length / 2; i++) {
				let min = i, max = i;
				for (let j = i + 1; j < arr.length - i; j++) {
					if (arr[j] > arr[max]) {
						max = j; continue;
					}
					if (arr[j] < arr[min]) {
						min = j;
					}
				}
				let tmp;
				tmp = arr[i - 1]; arr[i - 1] = arr[min]; arr[min] = tmp;//最小 
				tmp = arr[arr.length - i]; arr[arr.length - i] = arr[max]; arr[max] = tmp;//最大
			}
		}
	}
}
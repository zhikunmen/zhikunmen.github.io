module sort {
	export class quickSort extends Sort {
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]) {
			this.quickSort(arr, 0, arr.length - 1);
		}

		private quickSort(arr, left, right) {
			let partitionIndex;
			if (left < right) {
				partitionIndex = this.partition(arr, left, right);
				this.quickSort(arr, left, partitionIndex - 1);
				this.quickSort(arr, partitionIndex, right);
			}
		}

		/**分区操作 */
		public partition(arr, left, right) {
			var pivot = left,
				index = pivot - 1;
			for (let i = index; i <= right; i++) {
				if (arr[i] < arr[pivot]) {
					this.swap(arr, i, index);
					index++;
				}
			}
			this.swap(arr, pivot, index - 1);
			return index - 1;
		}

		/**交换数字 */
		public swap(arr, i, j) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}
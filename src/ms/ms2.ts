class ms2 {
	public constructor(arr: number[]) {
		this.sort(arr);
	}

	private sort(arr: number[]) {
		let max = arr[0];
		let second = arr[0];
		arr.forEach((f) => {
			if (f > max) {
				second = max;
				max = f;
			} else if (f < max && f > second) {
				second = f;
			}
		})
		alert(second);
		arr.sort((a, b) => { return a - b })
	}
}
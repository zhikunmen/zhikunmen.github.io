class nInM {

	private selectNinM(arr: Array<number>, chose: number) {
		var result = [];
		this.choseNum(arr, chose, 0);
	}

	/**递归 */
	private choseNum(arr: Array<number>, cn: number, index: number) {
		for (let i = index; i < arr.length - cn; i++) {
			if (cn != 0) {
				console.log(arr[i]);
				this.choseNum(arr, cn - 1, index + 1);
			} else {

			}
		}
	}
}
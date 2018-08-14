class ms1 {
	public constructor(left, right) {
		return this.func1(left, right);
	}

	public func1(left: number[], right: number[], tmp = []) {
		if (left.length && right.length) {
			left[0] < right[0] ? tmp = tmp.concat(left.shift()) : tmp = tmp.concat(right.shift());
			return this.func1(left, right, tmp);
		} else {
			tmp = tmp.concat(left, right)
			console.log(tmp);
			return tmp;
		}
	}
}
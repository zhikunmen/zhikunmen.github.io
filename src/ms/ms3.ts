class ms3 {
	public constructor(arr: number[]) {
		let b = [];
		allRange(arr, [], b);
		console.log(b);
	}
}

function allRange(arr: number[], path, b): void {
	if (!arr.length) {
		b.push(path);
		return;
	}
	arr.forEach((value, key) => {
		let t = arr.slice();
		let p = path.slice();
		t.splice(key, 1);
		p.push(value);
		allRange(t, p, b);
	})
}
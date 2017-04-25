module sort {
	export class bubbleSort extends Sort{
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]){
			for(var i = 0; i < arr.length; i++){
				for(var j = i; j < arr.length; j++){
					if(arr[i] > arr[j]){
						let a = arr[j];
						arr[j] = arr[i];
						arr[i] = a;
 					}
				}
			}
		}
	}
}
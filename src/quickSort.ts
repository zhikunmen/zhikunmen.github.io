module sort {
	export class quickSort extends Sort{
		public constructor(arr: number[]) {
			super(arr);
		}
		public init(arr: number[]){
			let i = 0;
			let j = arr.length - 1;
			this.sort(arr,i,j);
		}

		private sort(arr: number[], i:number, j: number){
			if(i == j){
				return;
			}

			var key = arr[i];
			var stepi = i;
			var stepj = j;
			while(j > i){
				if(arr[j] >= key){
					j--;
				}else{
					arr[i] = arr[j];
					while(j > ++i){
						if(arr[i] > key){
							arr[j] = arr[i];
							break;
						}
					}
				}
			}
			if(stepi == i){
				this.sort(arr,++i,stepj);
				return;
			}
			arr[i] = key;
			//递归
			this.sort(arr,stepi,i);
			this.sort(arr,j,stepj);
		}
	}
}
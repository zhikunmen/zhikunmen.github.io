module sort {
	export class systemSort extends Sort{
		public constructor(arr: number[]) {
			super(arr);
		}

		public init(arr: number[]){
			arr.sort((a,b)=>{
				return a- b;
			});
		}
	}
}
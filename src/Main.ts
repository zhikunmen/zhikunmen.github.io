class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.initUI();
    }
    private _sortArr: number[] = [];
    private _system: sort.systemSort;
    private _bubbleSort: sort.bubbleSort;
    private _sortFunc: any[] = [];
    private _btnPanel: egret.Sprite;
    private _logTex: egret.TextField;
    private _scroll: egret.ScrollView;
    public initUI(): void {
        this._sortFunc.push({ "name": "system", "cn": "系统排序" });
        this._sortFunc.push({ "name": "bubble", "cn": "冒泡排序" });
        this._sortFunc.push({ "name": "quick", "cn": "快速排序" });
        this._sortFunc.push({ "name": "shell", "cn": "希尔排序" });
        this._sortFunc.push({ "name": "select", "cn": "选择排序" });
        this._sortFunc.push({ "name": "insert", "cn": "插入排序" })
        this._sortFunc.push({ "name": "merge", "cn": "归并排序" })
        this._sortFunc.push({ "name": "topK", "cn": "找出最大的前100,topK算法" });
        this._sortFunc.push({ "name": "BinarySearch", "cn": "二分查找" });
        this._sortFunc.push({ "name": "ms1", "cn": "一个递归将两个有序变成一个有序" })
        this._sortFunc.push({ "name": "ms2", "cn": "一个循环找出第二大数" })
        this._sortFunc.push({ "name": "ms3", "cn": "打印数组全排列" });
        this._sortFunc.push({ "name": "ms4", "cn": "找出一组数组中重复的数字" });
        this._btnPanel = new egret.Sprite();
        this.addChild(this._btnPanel);
        this._logTex = new egret.TextField();
        this._logTex.size = 26;
        this._logTex.width = 200;
        this._scroll = new egret.ScrollView();
        this._scroll.verticalScrollPolicy = "on";
        this._scroll.horizontalScrollPolicy = "off";
        this.addChild(this._scroll);
        this._scroll.setContent(this._logTex);
        this._scroll.x = 300;
        this._scroll.width = 300;
        this._scroll.height = 800;
        for (let i = 0; i < this._sortFunc.length; i++) {
            let btn = new egret.Sprite();
            btn.graphics.beginFill(0x00ff00);
            btn.graphics.drawRect(50, 40 * i + 50, 30, 30);
            btn.graphics.endFill();
            this._btnPanel.addChild(btn);
            btn.touchEnabled = true;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sort, this);
            btn.name = this._sortFunc[i]["name"];
            let txt = new egret.TextField();
            txt.text = this._sortFunc[i]["cn"];
            this.addChild(txt);
            txt.x = btn.x + 100;
            txt.y = 40 * i + 50;
            txt.textColor = 0xff0000;
            txt.size = 30;
            txt.touchEnabled = true;
            txt.textAlign = egret.HorizontalAlign.LEFT;
            txt.name = this._sortFunc[i]["name"];
            txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sort, this);
        }
        //斐波拉切数列
        let fibonacciPanel = new egret.DisplayObjectContainer();
        this.addChild(fibonacciPanel); fibonacciPanel.x = 0;
        let fibn = 15;
        for (let i = 0; i < fibn; i++) {
            let btn = new egret.Sprite();
            btn.graphics.beginFill(0x00ff00);
            btn.graphics.drawRect(i * 10, -this.getFibonacci(fibn)[i] * 10, 10, 10);
            btn.graphics.endFill();
            fibonacciPanel.addChild(btn);
        }
        fibonacciPanel.y = egret.MainContext.instance.stage.stageHeight;
    }


    public sort(evt: egret.TouchEvent) {
        this._logTex.text = "";
        this._sortArr = [];
        for (let i = 0; i < 100000; i++) {
            this._sortArr.push(Math.random() * 10000);
        }
        let curTime = egret.getTimer();
        let type = evt.currentTarget.name;
        switch (type) {
            case "system"://9.682
                if (!this._system) {
                    this._system = new sort.systemSort(this._sortArr);
                }
                this._system = null;
                break;
            case "bubble":
                if (!this._bubbleSort) {
                    this._bubbleSort = new sort.bubbleSort(this._sortArr);
                }
                this._bubbleSort = null;
                break;
            case "quick"://20
                let quick = new sort.quickSort(this._sortArr);
                quick = null;
                break;
            case "shell":
                let shell = new sort.shellSort(this._sortArr);
                shell = null;
                break;
            case "select":
                let select = new sort.selectSort(this._sortArr);
                select = null;
                break;
            case "insert":
                let insert = new sort.insertSort(this._sortArr);
                insert = null;
                break;
            case "merge":
                let merge = new sort.mergeSort(this._sortArr);
                merge = null;
                break
            case "topK":
                let topk = new topK(this._sortArr);
                // console.log(topK);
                break;
            case "BinarySearch":
                new BinarySearchClass();
                break;
            case "ms1":
                let mid = Math.floor(this._sortArr.length / 2);
                let left = this._sortArr.slice(0, mid).sort((a, b) => { return a - b });
                let right = this._sortArr.slice(mid, this._sortArr.length).sort((a, b) => { return a - b });
                this._sortArr = new ms1(left, right) as any;
                break;
            case "ms2":
                let ms_2 = new ms2(this._sortArr);
                break;
            case "ms3":
                let ms_3 = new ms3([1, 2, 3, 4]);
                break;
            case "ms4":
                let ms_4 = new ms4([11, 23, 321, 543, 1321, 56, 23, 11, 534, 11]);
                break;
        }
        for (let i = 0; i < 100; i++) {//只拿最小的前100个显示出来
            this._logTex.text += this._sortArr[i].toFixed(5) + "\n";
        }
        alert((egret.getTimer() - curTime) / 1000);
    }

    private getFibonacci(n): number[] {
        var fibArr = [];
        var i = 0;
        while (i < n) {
            if (i < 2)
                fibArr.push(1);
            else
                fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
            i++;
        }
        return fibArr;
    }

}
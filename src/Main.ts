class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.initUI();
    }
    private _sortArr: number[] = [];
    private _system: sort.systemSort;
    private _bubbleSort: sort.bubbleSort;
    private _quickSort: sort.quickSort;
    private _inserSort: sort.insertSort;
    private _sortFunc: any[] = [];
    private _btnPanel: egret.Sprite;
    private _logTex: egret.TextField;
    private _scroll: egret.ScrollView;
    public initUI(): void {
        this._sortFunc.push({ "name": "system","cn":"系统排序" }); this._sortFunc.push({ "name": "bubble","cn":"冒泡排序" });
        this._sortFunc.push({ "name": "quick","cn":"快速排序" });  this._sortFunc.push({ "name": "insert","cn":"插入排序" });
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
            txt.width = 200;
            txt.textAlign = egret.HorizontalAlign.LEFT;
        }
    }


    public sort(evt: egret.TouchEvent) {
        this._logTex.text = "";
        this._sortArr = [];
        for (let i = 0; i < 100; i++) {
            this._sortArr.push(Math.random() * 10000);
        }
        let type = evt.currentTarget.name;
        switch (type) {
            case "system":
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
            case "quick":
                if(!this._quickSort){
                    this._quickSort = new sort.quickSort(this._sortArr);
                }
                this._quickSort = null;
                break;
            case "insert":
                if(!this._inserSort){
                    this._inserSort = new sort.insertSort(this._sortArr);
                }
                this._inserSort = null;
                break;
        }
        for (let i = 0; i < this._sortArr.length; i++) {
            this._logTex.text += this._sortArr[i].toFixed(5) + "\n";
        }
    }
}
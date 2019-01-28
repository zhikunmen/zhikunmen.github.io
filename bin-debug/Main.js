var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._sortArr = [];
        _this._sortFunc = [];
        _this.initUI();
        return _this;
    }
    Main.prototype.initUI = function () {
        var div = document.getElementsByClassName("egret-player")[0];
        var htmlCode = document.createElement("img");
        htmlCode.src = "https://wx.qlogo.cn/mmopen/vi_32/BPhthiaYBfZoYfc3WJjyWRNZbnk86yR3IiacSo9091zUW9FzZvD9BGlECK84VjkLXvH3QD8Fcy6HhaEOjhrC8LAg/132";
        htmlCode.style.position = "relative";
        function setPostion(left, top, width, height) {
            var xScale;
            var yScale;
            if (document.body.clientWidth < document.body.clientHeight) {
                xScale = document.body.clientWidth / egret.MainContext.instance.stage.stageWidth;
                yScale = document.body.clientHeight / egret.MainContext.instance.stage.stageHeight;
                htmlCode.style.width = width * xScale + "px";
                htmlCode.style.height = height * yScale + "px";
                htmlCode.style.left = left * xScale + "px";
                htmlCode.style.top = top * xScale + "px";
            }
            else {
                xScale = document.body.clientWidth / egret.MainContext.instance.stage.stageHeight;
                yScale = document.body.clientHeight / egret.MainContext.instance.stage.stageWidth;
                htmlCode.style.width = height * xScale + "px";
                htmlCode.style.height = width * yScale + "px";
                htmlCode.style.left = left * xScale + "px";
                htmlCode.style.top = top * xScale + "px";
            }
        }
        setPostion(300, 300, 100, 100);
        div.appendChild(htmlCode);
        this._sortFunc.push({ "name": "system", "cn": "系统排序" });
        this._sortFunc.push({ "name": "bubble", "cn": "冒泡排序" });
        this._sortFunc.push({ "name": "quick", "cn": "快速排序" });
        this._sortFunc.push({ "name": "shell", "cn": "希尔排序" });
        this._sortFunc.push({ "name": "select", "cn": "选择排序" });
        this._sortFunc.push({ "name": "insert", "cn": "插入排序" });
        this._sortFunc.push({ "name": "merge", "cn": "归并排序" });
        this._sortFunc.push({ "name": "topK", "cn": "找出最大的前100,topK算法" });
        this._sortFunc.push({ "name": "BinarySearch", "cn": "二分查找" });
        this._sortFunc.push({ "name": "ms1", "cn": "一个递归将两个有序变成一个有序" });
        this._sortFunc.push({ "name": "ms2", "cn": "一个循环找出第二大数" });
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
        for (var i = 0; i < this._sortFunc.length; i++) {
            var btn = new egret.Sprite();
            btn.graphics.beginFill(0x00ff00);
            btn.graphics.drawRect(50, 40 * i + 50, 30, 30);
            btn.graphics.endFill();
            this._btnPanel.addChild(btn);
            btn.touchEnabled = true;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sort, this);
            btn.name = this._sortFunc[i]["name"];
            var txt = new egret.TextField();
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
        var fibonacciPanel = new egret.DisplayObjectContainer();
        this.addChild(fibonacciPanel);
        fibonacciPanel.x = 0;
        var fibn = 15;
        for (var i = 0; i < fibn; i++) {
            var btn = new egret.Sprite();
            btn.graphics.beginFill(0x00ff00);
            btn.graphics.drawRect(i * 10, -this.getFibonacci(fibn)[i] * 10, 10, 10);
            btn.graphics.endFill();
            fibonacciPanel.addChild(btn);
        }
        fibonacciPanel.y = egret.MainContext.instance.stage.stageHeight;
    };
    Main.prototype.sort = function (evt) {
        this._logTex.text = "";
        this._sortArr = [];
        for (var i = 0; i < 100; i++) {
            this._sortArr.push(Math.random() * 100);
        }
        var curTime = egret.getTimer();
        var type = evt.currentTarget.name;
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
                var quick = new sort.quickSort(this._sortArr);
                quick = null;
                break;
            case "shell":
                var shell = new sort.shellSort(this._sortArr);
                shell = null;
                break;
            case "select":
                var select = new sort.selectSort(this._sortArr);
                select = null;
                break;
            case "insert":
                var insert = new sort.insertSort(this._sortArr);
                insert = null;
                break;
            case "merge":
                var merge = new sort.mergeSort(this._sortArr);
                merge = null;
                break;
            case "topK":
                var topk = new topK(this._sortArr);
                console.log(topK);
                break;
            case "BinarySearch":
                new BinarySearchClass();
                break;
            case "ms1":
                var mid = Math.floor(this._sortArr.length / 2);
                var left = this._sortArr.slice(0, mid).sort(function (a, b) { return a - b; });
                var right = this._sortArr.slice(mid, this._sortArr.length).sort(function (a, b) { return a - b; });
                this._sortArr = new ms1(left, right);
                break;
            case "ms2":
                var ms_2 = new ms2(this._sortArr);
                break;
            case "ms3":
                var ms_3 = new ms3([1, 2, 3, 4]);
                break;
            case "ms4":
                var ms_4 = new ms4([11, 23, 321, 543, 1321, 56, 23, 11, 534, 11]);
                break;
        }
        for (var i = 0; i < 100; i++) {
            this._logTex.text += this._sortArr[i].toFixed(5) + "\n";
        }
        alert((egret.getTimer() - curTime) / 1000);
    };
    Main.prototype.getFibonacci = function (n) {
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
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");

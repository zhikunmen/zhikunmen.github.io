var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sort;
(function (sort) {
    //选择排序
    var selectSort = (function (_super) {
        __extends(selectSort, _super);
        function selectSort(arr) {
            return _super.call(this, arr) || this;
        }
        selectSort.prototype.init = function (arr) {
            for (var i = 1; i < arr.length / 2; i++) {
                var min = i, max = i;
                for (var j = i + 1; j < arr.length - i; j++) {
                    if (arr[j] > arr[max]) {
                        max = j;
                        continue;
                    }
                    if (arr[j] < arr[min]) {
                        min = j;
                    }
                }
                var tmp = void 0;
                tmp = arr[i - 1];
                arr[i - 1] = arr[min];
                arr[min] = tmp; //最小 
                tmp = arr[arr.length - i];
                arr[arr.length - i] = arr[max];
                arr[max] = tmp; //最大
            }
        };
        return selectSort;
    }(sort.Sort));
    sort.selectSort = selectSort;
    __reflect(selectSort.prototype, "sort.selectSort");
})(sort || (sort = {}));

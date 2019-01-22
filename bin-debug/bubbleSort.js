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
    var bubbleSort = (function (_super) {
        __extends(bubbleSort, _super);
        function bubbleSort(arr) {
            return _super.call(this, arr) || this;
        }
        bubbleSort.prototype.init = function (arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        var a = arr[j];
                        arr[j] = arr[i];
                        arr[i] = a;
                    }
                }
            }
        };
        return bubbleSort;
    }(sort.Sort));
    sort.bubbleSort = bubbleSort;
    __reflect(bubbleSort.prototype, "sort.bubbleSort");
})(sort || (sort = {}));

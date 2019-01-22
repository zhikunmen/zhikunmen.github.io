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
    var quickSort = (function (_super) {
        __extends(quickSort, _super);
        function quickSort(arr) {
            return _super.call(this, arr) || this;
        }
        quickSort.prototype.init = function (arr) {
            var qarr = this.quick(arr.concat());
            for (var i = 0; i < qarr.length; i++) {
                arr[i] = qarr[i];
            }
        };
        quickSort.prototype.quick = function (arr) {
            if (arr.length <= 1) {
                return arr;
            }
            var leftArr = [];
            var rightArr = [];
            var q = arr[0];
            for (var i = 1, l = arr.length; i < l; i++) {
                if (arr[i] > q) {
                    rightArr.push(arr[i]);
                }
                else {
                    leftArr.push(arr[i]);
                }
            }
            return [].concat(this.quick(leftArr), [q], this.quick(rightArr));
        };
        return quickSort;
    }(sort.Sort));
    sort.quickSort = quickSort;
    __reflect(quickSort.prototype, "sort.quickSort");
})(sort || (sort = {}));

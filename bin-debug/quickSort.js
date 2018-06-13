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
            var first = arr[0];
            var last = arr[arr.length - 1];
            var mid = arr[arr.length / 2];
            var aaa = [first, last, mid];
            arr[0] = Math.min.apply(this, aaa);
            arr[arr.length - 1] = Math.max.apply(this, aaa);
            aaa.splice(aaa.indexOf(arr[0]), 1);
            aaa.splice(aaa.indexOf(arr[arr.length - 1]), 1);
            arr[arr.length / 2] = aaa[0];
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
//# sourceMappingURL=quickSort.js.map
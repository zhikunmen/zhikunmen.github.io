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
    var mergeSort = (function (_super) {
        __extends(mergeSort, _super);
        function mergeSort(arr) {
            return _super.call(this, arr) || this;
        }
        mergeSort.prototype.init = function (arr) {
            var tmp = arr.concat();
            tmp = this.mergetSort(tmp);
            for (var i = 0; i < tmp.length; i++) {
                arr[i] = tmp[i];
            }
            arr = tmp;
        };
        mergeSort.prototype.mergetSort = function (arr) {
            if (arr.length <= 1)
                return arr;
            var mid = Math.floor(arr.length / 2); //向下取整 拿中间值
            var left_arr = arr.slice(0, mid);
            var right_arr = arr.slice(mid, arr.length);
            return this.merge(this.mergetSort(left_arr), this.mergetSort(right_arr));
        };
        mergeSort.prototype.merge = function (left, right) {
            var tmp = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    tmp.push(left.shift());
                }
                else {
                    tmp.push(right.shift());
                }
            }
            return tmp.concat(left, right);
        };
        return mergeSort;
    }(sort.Sort));
    sort.mergeSort = mergeSort;
    __reflect(mergeSort.prototype, "sort.mergeSort");
})(sort || (sort = {}));
//# sourceMappingURL=mergeSort.js.map
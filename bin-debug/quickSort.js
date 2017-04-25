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
            var i = 0;
            var j = arr.length - 1;
            this.sort(arr, i, j);
        };
        quickSort.prototype.sort = function (arr, i, j) {
            if (i == j) {
                return;
            }
            var key = arr[i];
            var stepi = i;
            var stepj = j;
            while (j > i) {
                if (arr[j] >= key) {
                    j--;
                }
                else {
                    arr[i] = arr[j];
                    while (j > ++i) {
                        if (arr[i] > key) {
                            arr[j] = arr[i];
                            break;
                        }
                    }
                }
            }
            if (stepi == i) {
                this.sort(arr, ++i, stepj);
                return;
            }
            arr[i] = key;
            //递归
            this.sort(arr, stepi, i);
            this.sort(arr, j, stepj);
        };
        return quickSort;
    }(sort.Sort));
    sort.quickSort = quickSort;
    __reflect(quickSort.prototype, "sort.quickSort");
})(sort || (sort = {}));
//# sourceMappingURL=quickSort.js.map
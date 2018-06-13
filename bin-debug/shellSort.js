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
    var shellSort = (function (_super) {
        __extends(shellSort, _super);
        function shellSort(arr) {
            return _super.call(this, arr) || this;
        }
        shellSort.prototype.init = function (arr) {
            var dk = Math.floor(arr.length / 2);
            while (dk >= 1) {
                this.inserSort(arr, dk);
                dk = Math.floor(dk / 2);
            }
        };
        shellSort.prototype.inserSort = function (arr, dk) {
            var i = dk, j, key;
            for (; i < arr.length; i++) {
                j = i;
                while (j >= 0) {
                    key = arr[j];
                    if (arr[i] < arr[j]) {
                        arr[j] = arr[i];
                        arr[i] = key;
                    }
                    j -= dk;
                }
            }
        };
        return shellSort;
    }(sort.Sort));
    sort.shellSort = shellSort;
    __reflect(shellSort.prototype, "sort.shellSort");
})(sort || (sort = {}));
//# sourceMappingURL=shellSort.js.map
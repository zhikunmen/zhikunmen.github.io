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
    var insertSort = (function (_super) {
        __extends(insertSort, _super);
        function insertSort(arr) {
            return _super.call(this, arr) || this;
        }
        insertSort.prototype.init = function (arr) {
            for (var i = 1; i <= arr.length - 1; i++) {
                var j = i;
                while (j > 0) {
                    if (arr[j - 1] > arr[j]) {
                        var tmp = arr[j];
                        arr[j] = arr[j - 1];
                        arr[j - 1] = tmp;
                    }
                    j--;
                }
            }
        };
        return insertSort;
    }(sort.Sort));
    sort.insertSort = insertSort;
    __reflect(insertSort.prototype, "sort.insertSort");
})(sort || (sort = {}));
//# sourceMappingURL=insertSort.js.map
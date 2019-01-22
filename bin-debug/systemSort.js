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
    var systemSort = (function (_super) {
        __extends(systemSort, _super);
        function systemSort(arr) {
            return _super.call(this, arr) || this;
        }
        systemSort.prototype.init = function (arr) {
            arr.sort(function (a, b) {
                return a - b;
            });
        };
        return systemSort;
    }(sort.Sort));
    sort.systemSort = systemSort;
    __reflect(systemSort.prototype, "sort.systemSort");
})(sort || (sort = {}));

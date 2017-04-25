var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sort;
(function (sort) {
    var Sort = (function () {
        function Sort(arr) {
            this.init(arr);
            console.error(arr);
        }
        Sort.prototype.init = function (arr) {
        };
        return Sort;
    }());
    sort.Sort = Sort;
    __reflect(Sort.prototype, "sort.Sort");
})(sort || (sort = {}));
//# sourceMappingURL=Sort.js.map
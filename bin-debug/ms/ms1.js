var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ms1 = (function () {
    function ms1(left, right) {
        return this.func1(left, right);
    }
    ms1.prototype.func1 = function (left, right, tmp) {
        if (tmp === void 0) { tmp = []; }
        if (left.length && right.length) {
            left[0] < right[0] ? tmp = tmp.concat(left.shift()) : tmp = tmp.concat(right.shift());
            return this.func1(left, right, tmp);
        }
        else {
            tmp = tmp.concat(left, right);
            console.log(tmp);
            return tmp;
        }
    };
    return ms1;
}());
__reflect(ms1.prototype, "ms1");
//# sourceMappingURL=ms1.js.map
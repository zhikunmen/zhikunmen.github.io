var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ms3 = (function () {
    function ms3(arr) {
        var b = [];
        allRange(arr, [], b);
        console.log(b);
    }
    return ms3;
}());
__reflect(ms3.prototype, "ms3");
function allRange(arr, path, b) {
    if (!arr.length) {
        b.push(path);
        return;
    }
    arr.forEach(function (value, key) {
        var t = arr.slice();
        var p = path.slice();
        t.splice(key, 1);
        p.push(value);
        allRange(t, p, b);
    });
}

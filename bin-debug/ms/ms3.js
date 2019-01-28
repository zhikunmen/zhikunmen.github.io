var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ms3 = (function () {
    function ms3(arr) {
        console.log(allRange(arr));
    }
    return ms3;
}());
__reflect(ms3.prototype, "ms3");
/**二维数组解决 */
function allRange(arr) {
    var length = arr.length;
    if (length == 1) {
        return arr;
    }
    else if (length == 2) {
        return [[arr[0], arr[1]], [arr[1], arr[0]]];
    }
    else {
        var temp = [];
        for (var i = 0; i < length; i++) {
            var save = arr[i];
            arr.splice(i, 1);
            var res = allRange(arr);
            arr.splice(i, 0, save);
            for (var j = 0; j < res.length; j++) {
                res[j].push(arr[i]);
                temp.push(res[j]);
            }
        }
        return temp;
    }
}

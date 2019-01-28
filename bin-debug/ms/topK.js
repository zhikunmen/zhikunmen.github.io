var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var topK = (function () {
    function topK(arr) {
        var temp = topKFunc(arr);
        temp.forEach(function (f, i) {
            arr[i] = f;
        });
    }
    return topK;
}());
__reflect(topK.prototype, "topK");
function topKFunc(arr) {
    var tempArr = arr.concat().slice(0, 100);
    tempArr.sort(function (a, b) { return b - a; });
    arr.forEach(function (e) {
        if (e > tempArr[tempArr.length - 1]) {
            tempArr.pop();
            tempArr.push(e);
            tempArr.sort(function (a, b) { return b - a; });
        }
    });
    return arr = tempArr;
}

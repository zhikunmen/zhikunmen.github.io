var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ms4 = (function () {
    function ms4(arr) {
        func(arr);
    }
    return ms4;
}());
__reflect(ms4.prototype, "ms4");
function func(arr) {
    arr.sort();
    var repeatArr = [];
    for (var i = 0; i < arr.length;) {
        console.log(i);
        var item = arr[i];
        if (arr.indexOf(item) != arr.lastIndexOf(item)) {
            repeatArr.push(item);
            i = arr.lastIndexOf(item) + 1;
        }
        else {
            i++;
        }
    }
    console.log(repeatArr);
}

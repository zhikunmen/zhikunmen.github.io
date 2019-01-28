var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BinarySearchClass = (function () {
    function BinarySearchClass() {
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];
        ;
        console.log(BinarySearch(a, 9));
    }
    return BinarySearchClass;
}());
__reflect(BinarySearchClass.prototype, "BinarySearchClass");
function BinarySearch(arr, key, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length; }
    if (low == high) {
        if (arr[low] == key) {
            return low;
        }
        else {
            return -1; //二分查找也没有找到
        }
    }
    var middle = Math.floor((low + high) / 2);
    if (arr[middle] == key) {
        return middle;
    }
    if (arr[middle] > key) {
        BinarySearch(arr, key, low, middle);
    }
    else if (arr[middle] < key) {
        BinarySearch(arr, key, middle, arr.length);
    }
}

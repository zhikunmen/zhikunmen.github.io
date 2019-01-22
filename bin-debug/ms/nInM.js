var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nInM = (function () {
    function nInM() {
    }
    nInM.prototype.selectNinM = function (arr, chose) {
        var result = [];
        this.choseNum(arr, chose, 0);
    };
    /**递归 */
    nInM.prototype.choseNum = function (arr, cn, index) {
        for (var i = index; i < arr.length - cn; i++) {
            if (cn != 0) {
                console.log(arr[i]);
                this.choseNum(arr, cn - 1, index + 1);
            }
            else {
            }
        }
    };
    return nInM;
}());
__reflect(nInM.prototype, "nInM");

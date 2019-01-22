/*1.一个人赶着鸭子去每个村庄卖，每经过一个村子卖去所赶鸭子的一半又一只。
这样他经过了七个村子后还剩两只鸭子，问他出发时共赶多少只鸭子？经过
每个村子卖出多少只鸭子?*/
/**
 * @param duck 鸭子数量
 * @param village 村庄
 * */
function deepDuck(duck, village) {
    if (village == 0) {
        return duck;
    }
    else {
        console.log("duck:", duck, "village:", village);
        duck = duck * 2 + 1;
        return deepDuck(duck, village - 1);
    }
}
console.log(deepDuck(2, 7));

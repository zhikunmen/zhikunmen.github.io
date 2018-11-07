/*2.角谷定理。输入一个自然数，若为偶数，则把它除以2，
若为奇数，则把它乘以3加1。经过如此有限次运算后，总可
以得到自然数值1。求经过多少次可得到自然数1。*/
/**
 * @param num 输入的数
 * @param time 循环次数
 */
function jg(num, time) {
    if (num == 1) {
        console.log("循环了" + time )
        return time;
    } else {
        console.log("当前数:", num, "循环次数:" + time);
        return (num % 2 == 0 ? jg(num / 2, ++time) : jg(num * 3 + + 1, ++time));
    }
}

console.log(jg(108, 0));


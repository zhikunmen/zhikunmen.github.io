var numbers = [];
/**十进制转其他进制 */
function number10ToPivo(number, pivo) {
    let surplus = Math.floor(number / pivo);
    numbers.push(number % pivo);
    return surplus > 0 ? number10ToPivo(surplus, pivo) : finnalResult();
}
/**其他进制转十进制 */
function numberPivoTo10(number, pivo) {
    [...(number.toString())].forEach((f) => {
        if (f >= pivo) {
            alert("输入数据有误");
        }
    })
    return parseInt(number.toString(), pivo);
}

function finnalResult() {
    let lastNum = ""
    //数组翻转
    let reverseNumbers = numbers.reverse()
    reverseNumbers.forEach((f) => {
        if (f >= 10) {//16进制转ascii码 A 55 a 97
            f += 55;
            f = String.fromCharCode(f);
        }
        lastNum += f;
    })
    console.log(lastNum);
}
console.log(number10ToPivo(11, 16))
console.log(numberPivoTo10(100, 2))

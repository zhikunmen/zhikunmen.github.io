function deepCopy(oldObj) {
    if (typeof oldObj != 'object')
        return oldObj;
    var newObj = oldObj instanceof Array ? [] : {};
    for (var key in oldObj) {
        if (!newObj.hasOwnProperty(key)) {
            newObj[key] = typeof oldObj[key] === 'object' ? deepCopy(oldObj[key]) : oldObj[key];
        }
    }
    return newObj;
}

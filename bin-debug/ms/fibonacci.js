var cache = [];
function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        cache[n - 1] = cache[n - 1] || fibonacci(n - 1);
        cache[n - 2] = cache[n - 2] || fibonacci(n - 2);
        return cache[n - 1] + cache[n - 2];
    }
}

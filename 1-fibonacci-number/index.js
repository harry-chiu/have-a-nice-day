// 遞迴解法 O(2^N)
// 說明：直覺解，但效能很差，因此另外查資料找較佳解法（站在巨人的肩膀上）

/**
 * 費氏數列
 * 定義：每個數字的值是前兩個數的和
 * 參考：https://en.wikipedia.org/wiki/Fibonacci_number
 * @param {*} position 取得第 N 位數
 */
function fibonacci(position) {
  if (position === 0) {
    return 0;
  } else if (position <= 2) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

// Memoization 快取解法 O(n)
// 說明：將運算過的值存入陣列並傳入到下一次的運算中，
//      透過這種快取的行為節省運算資源。
// 參考：https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

/**
 * 費氏數列
 * 定義：每個數字的值是前兩個數的和
 * 參考：https://en.wikipedia.org/wiki/Fibonacci_number
 * @param {*} position 取得第 N 位數
 * @param {*} memo 快取
 */
function memoFibonacci(position, memo) {
  memo = memo || {};

  if (position === 0) return 0;
  if (position <= 2) return 1;
  if (memo[position]) return memo[position];

  memo[position] =
    memoFibonacci(position - 1, memo) + memoFibonacci(position - 2, memo);

  return memo[position];
}

// fibonacci() O(2^N)
// 結果：832040
// 執行：1664079 次
// 花費：15.675ms
console.time('fibonacci()');
console.log(fibonacci(30));
console.timeEnd('fibonacci()');

// fibonacci() O(n)
// 結果：832040
// 執行：57 次
// 花費：0.12ms
console.time('memoFibonacci()');
console.log(memoFibonacci(30)); // 832040，執行 57 次
console.timeEnd('memoFibonacci()');

// 1.Coin Problem

const changeCoins = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
const coins = [1, 2, 5];
const amount = 11;
console.log(changeCoins(coins, amount));

// ------------------------------------------ //

// 2. Longest palindrome substring

let string = "babad".split("");
let max = 0;
let ans = "";

for (let i = 0; i < string.length; i++) {
  for (let j = i + 1; j < string.length; j++) {
    let x = string.slice(i, j);
    let str1 = String(x.join(""));
    let str2 = String(x.reverse().join(""));
    if (str1 === str2 && str1.length > max) {
      max = str1.length;
      ans = str1;
    }
  }
}
console.log(ans);

// ---------------------------------------//

// 3.Repeating Substring

let str = "ababc".split("");
let target = "ab".split("");
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (String(str.slice(i, i + 2)) === String(target)) {
    count++;
  }
}
console.log(count);

// ------------------------------------------------------ //
// 4. Largest Sum in subarray
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maximum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let x = arr.slice(i, j);
    let result = x.reduce((accum, val) => accum + val);
    if (result > maximum) {
      maximum = result;
    }
  }
}
console.log(maximum);

// -------------------------------------------------- //

// 5.Climbing StairCase

let num = 5;

let dp = new Array(num).fill(0);
dp[0] = 1;
dp[1] = 2;
let sum = 0;

for (let i = 2; i < num; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}
console.log(dp[num - 1]);

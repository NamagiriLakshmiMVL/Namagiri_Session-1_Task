//1. Two Sum

let nums = [2, 7, 11, 15];
let target = 9;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      console.log([i, j]);
      break;
    }
  }
}
// -----------------------------------------------------------------//
//2.Group Anagrams

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
let strDict = {};
for (let i of str) {
  let x = i.split("").sort().join("");
  if (!strDict[x]) {
    strDict[x] = [];
  }
  strDict[x].push(i);
}
console.log(Object.values(strDict));

//3.Longest Substring without repeating characters

let s = "abcabcbb";

let ans = "";

let max = 0;
for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    let x = s.slice(i, j).split("");
    let a = Array.from(new Set(x));
    if (a.length === x.length && a.length > max) {
      ans = x.join("");
      max = a.length;
    }
  }
}
console.log(ans.length);

// --------------------------
// 4. Top k frequent elements

let arr = [1, 1, 1, 2, 2, 3];
let k = 2;
let dict = {};
let result = [];
for (let i = 0; i < arr.length; i++) {
  dict[arr[i]] = ++dict[arr[i]] || 1;
}
for (let i in dict) {
  if (dict[i] >= k) {
    result.push(Number(i));
  }
}
console.log(result);

// ----------------------------------------------------//
//5. Valid Anagram

let str1 = "anagram";
let str2 = "naagram";
let dictionary = {};

if (str1.length != str2.length) {
  console.log(false);
  return;
}

for (let i = 0; i < str1.length; i++) {
  dictionary[str1[i]] = ++dictionary[str1[i]] || 1;
}

for (let i = 0; i < str2.length; i++) {
  dictionary[str2[i]] = --dictionary[str2[i]] || 0;
}
for (let i in dictionary) {
  if (dictionary[i] != 0) {
    console.log(false);
    return;
  }
}
console.log(true);

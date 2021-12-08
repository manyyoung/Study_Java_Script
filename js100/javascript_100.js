/**
 * 1 ~ 100 
 * 
 * test this file 
 * run terminal 
 * node javascript_100.js
 */

// 1. 
var nums = [100, 200, 300, 400, 500 ]

nums.pop();
nums.pop();

console.log(nums);  // [100, 200, 300]

// 2. 
var arr = [200, 100, 300];

arr.splice(2, 0, 10000);    // splice() 메서드는 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다

console.log(arr);   // [200, 100, 10000, 300]

// 3.
console.log(typeof(arr));   // object

// 4. 
let objFour = {
    a: 1,
    b: 2.22,
    c: 'p',
    d: [1, 2, 3]
};

console.log(typeof(objFour.a)); // number
console.log(typeof(objFour.b)); // number
console.log(typeof(objFour.c)); // string
console.log(typeof(objFour.d)); // object

// 5. 
var a = 10;
var b = 2;

for(var i = 1 ; i < 5 ; i += 2) {
    a += i;
}

console.log(a + b); // 16

// 6. what is true ?
let isTrueOrFalseObj = {
    a: null,
    b: 1, 
    c: 0,
    d: undefined
};
console.log(!!isTrueOrFalseObj.a);  // false
console.log(!!isTrueOrFalseObj.b);  // true
console.log(!!isTrueOrFalseObj.c);  // false
console.log(!!isTrueOrFalseObj.d);  // false

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

// 7. 
// 스타일 가이드 참고. https://www.w3schools.com/js/js_conventions.asp
let age;
let Age;
// let let = 'test';  // let is disallowed as a lexically bound name. 예약어
var let = 'test';   // 가능...;;
let _age;
// let 1age;
// var 1age;

// 8. 
let d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);   // 84

// 9. 
let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/', month, '/', day, ' ', hour, ':' , minute, ':', second);

console.log(result);

// 10. * 찍기

// 나무 높이
let height = 5;

// 층수만큼
for(let i = 1; i <= height; i++) {
    let str = '';

    // 공백
    for(let j = 1; j <= height - i ; j++) {
        // console.log(' ');
        str = str.concat(' ');
    }
    // 중간까지 *
    for(let k = 1; k <= i ; k++) {
        // console.log('*');
        str = str.concat('*');
    }
    // 중간 이후로 *
    for(let n = 1; n < i ; n++ ) {
        // console.log('*');
        str = str.concat('*');
    }
    // console.log('\n');
    console.log(str);
}
/**
             *
            ***
           *****
          *******
         *********
 */
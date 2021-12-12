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

// 11. 1 - 100 전부 더하기
 let s = 0;

 for(let i = 1 ; i <= 100 ; i++) {
     s+= i;
 }

 console.log(s);

 // 12. class 생성

class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
        
    }
    attack() {
        console.log('파이어볼'); 
    }
}

const x = new Wizard(545, 210, 10);

console.log(x.health, x.mana, x.armor);

x.attack();

// 13. 

let planetArr = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

let inputValue = 1;

console.log(planetArr[inputValue - 1]);

// 14. 3의 배수는 박수, 아니면 그냥 입력값 출력

let inputValue2 = 2;

if(inputValue2 % 3 === 0) {
    console.log('짝');
} else {
    console.log(inputValue2)
}

// 15.

let inputValue3 = '김다정'

console.log(`안녕하세요. 저는 ${inputValue3}입니다.`);

// 16. 

let inputValue4 = '거꾸로';

let reverseResult = '';

for(let i = 0 ; i < inputValue4.length ; i++) {
    reverseResult += inputValue4[inputValue4.length - i - 1];
}

console.log(reverseResult); // 로꾸거

/**
 * inputValue4.split('').reverse().join('');
 * split() 메서드는 문자열을 배열로 만들어 반환하고,
 * reverse() 메서드는 배열의 순서를 반전하며,
 * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
 */

// 17. 놀이기구는 키가 150cm 이상만 탈 수 있습니다. 입력으로 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

let inputHeight = 150;

if (inputHeight < 150) {
    console.log('NO');
} else {
    console.log('YES');
}

// 18. 평균 구하기. 소숫점은 버림

// const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let language = 20;
let math = 30;
let english = 45;

let avarage = (language + math + english) / 3;

console.log(avarage);
console.log(avarage.toFixed()); // 올림
console.log(Math.floor(avarage));   // 버림
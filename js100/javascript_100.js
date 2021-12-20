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
console.log(avarage.toFixed()); // 고정소숫점. 반올림
console.log(Math.floor(avarage));   // 버림

// 19. 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램

let twoNumber = '3 2';
let tempArr = twoNumber.split(' ');

// parseInt 문자열에 대하여 특정 진수 값 반환. 기본 10진수가 아님.
// console.log(parseInt(tempArr[0], 10));
/**
 * parseInt VS Number
 * 문자열 중 숫자만 : 전체 문자열
 * 참고: https://velog.io/@blackwidow/parseInt와-Number의-차이 
 */
console.log(Math.pow(tempArr[0], tempArr[1]));

// 20. 몫, 나머지

let quotient = tempArr[0] / tempArr[1];
let remainder = tempArr[0] % tempArr[1];

console.log(Math.floor(quotient), remainder);

// 21. set 만들기

// let set1 = {1, 2, 3, 4, 5};
// let set2 = {};
let set3 = new Set('javascript');
// let set4 = new Set(range(5));
let set5 = new Set();

console.log(set3, set5);    // Set(9) { 'j', 'a', 'v', 's', 'c', 'r', 'i', 'p', 't' } Set(0) {}

// 22. 배수 여부. 

// 배수는 나머지 0이면 됨

// 23. console.log(10/3) 은 정수?

// js에서는 소숫점 표현까지 되므로 정수를 원하면 Math.floor()를 사용한다.

// 24. 전부 대문자로 표현하시오

let engSmall = 'mary';

console.log(engSmall.toUpperCase());

// 25. 반지름 정수 n인 원 존재. 원의 넓이 구하는 function

let n = 3;

const circle = function (n) {
    return n * n * 3.14;
}

console.log(circle(n));

// 26. 행성 이름 한 영 존재. 한글 입력하면 영어 이름 출력하는 프로그램 구현
let planetList = [
    {
        kor: '수성',
        eng: 'Mercury'
    },
    {
        kor: '금성',
        eng: 'Venus'
    },
    {
        kor: '지구',
        eng: 'Earth'
    },
    {
        kor: '화성',
        eng: 'Mars'
    },
    {
        kor: '목성',
        eng: 'Jupiter'
    },
    {
        kor: '토성',
        eng: 'Saturn'
    },
    {
        kor: '천왕성',
        eng: 'Uranus'
    },
    {
        kor: '해왕성',
        eng: 'Neptune'
    }
];

const findPlanetFunc = function(kor) {
    return planetList.find(item => item.kor === kor).eng;
}

console.log(findPlanetFunc('지구'));    // Earth

/*
 답안지 표현 
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

console.log(planets['지구']);
*/

// 27.

let inputValue5 = 'Yujin Hyewon';
let inputValue6 = '70 100';
let inputValue5Arr = inputValue5.split(' ');
let inputValue6Arr = inputValue6.split(' ');
let inputValue5_6Obj = {};

inputValue5_6Obj[inputValue5Arr[0]] = inputValue6Arr[0];
inputValue5_6Obj[inputValue5Arr[1]] = inputValue6Arr[1];

console.log(inputValue5_6Obj);

/**
 * 답안
 * 
 * for(let i = 0 ; i < inputValue6Arr ; i++) {
 *  inputValue5_6Obj[inputValue5Arr[i]] = inputValue6Arr[i];
 * }
 * 
 */

// 28. 2-gram
let inputValue7 = 'javascript';

for(let i = 0 ; i < inputValue7.length - 1 ; i++) {
    console.log(inputValue7[i], inputValue7[i + 1])
}

// 29. 영 대소문자 구분

let uppercase = 'A';
let lowercase = 'b';

if(uppercase.toUpperCase() === uppercase) {
    console.log('Yes');
} else {
    console.log('No');
}

if(lowercase.toLowerCase() === lowercase) {
    console.log('No');
} else {
    console.log('Yes');
}

// 30. 문자열속 문자 존재 여부 확인 후 인덱스

let inputValue8 = 'pineapple is yummy';
let inputValue9 = 'apple';

console.log(inputValue8.indexOf(inputValue9));  // 4

// 31. 배열 내장함수 시간복잡도 O(1)
// 참고: https://nunucompany.tistory.com/29 
// ** 별도

// 32. 단어 개수 구하기
{
    let inputStr = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';

    console.log(inputStr.split(' ').length);
}

// 33. 역순출력
{
    let inputStr = '1 2 3 4 5';
    let reverse = inputStr.split(' ').reverse();
    
    let result = '';

    reverse.forEach(str => {
        result = result.concat(`${str} `);
    });

    console.log(result);
}

// 34. sort 구현, 입력값과 sort 값 후 같은지

let soltFunc = (a, b) => a - b;

let tall1 = '176 156 155 165 166 169';

let tall2 = tall1.split(' ').sort(soltFunc).join(' ');

let tall3 = '155 156 165 166 169 176';

let tall4 = tall3.split(' ').sort(soltFunc).join(' ');

console.log(tall2); // 155 156 165 166 169 176
console.log(tall1 === tall2);   // false

console.log(tall4); // 155 156 165 166 169 176
console.log(tall3 === tall4);   // true

// 35. Factory 함수 TODO.
{
function one(n) {
    function two(value) {
      const sq = Math.pow(value, n);
      return sq;
    }
    return two;
}

  const a = one(2); // = return two;
  const b = one(3);
  const c = one(4);
  
  console.log(a(10));
  console.log(b(10));
  console.log(c(10));
}

// 36. 구구단 출력
{
    let n = 2;
    
    let result = [];

    for(let i = 1 ; i < 10 ; i++) {
        result.push(n * i);
    }

    console.log(result.join(' '));
}

// 37. 반장 선거
{
    let inputValue = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';
    
    let arr = inputValue.split(' ');

    let tempObj = {};

    for(let i = 0 ; i < arr.length ; i++) {
        if(!tempObj[arr[i]]) {
            tempObj[arr[i]] = 1;
        } else {
            tempObj[arr[i]]++;
        }
    }
    console.log(tempObj);

    console.log(Object.keys(tempObj));
    
    // 답안
    let winner = Object.keys(tempObj).reduce((a, b) => tempObj[a] > tempObj[b] ? a : b);

    console.log(winner);

    console.log(`${winner}(이)가 총 ${tempObj[winner]}표로 반장이 되었습니다.`);
}

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
    console.log(tempObj);   // { '원범': 2, '혜원': 4, '유진': 2 }

    console.log(Object.keys(tempObj));  // [ '원범', '혜원', '유진' ]
    
    // 답안
    let winner = Object.keys(tempObj).reduce((a, b) => tempObj[a] > tempObj[b] ? a : b);

    console.log(winner);    // 혜원

    console.log(`${winner}(이)가 총 ${tempObj[winner]}표로 반장이 되었습니다.`);    // 혜원(이)가 총 4표로 반장이 되었습니다.
}

// 38. 호준이의 아르바이트. 1 - 3 위 모두 몇 명?
{
    let values = '97 86 75 66 55 97 85 97 97 95';

    let valuesArr = values.split(' ');

    let valuesObj = {};
    
    for(let i = 0 ; i < valuesArr.length ; i++) {
        if(!valuesObj[valuesArr[i]]) {
            valuesObj[valuesArr[i]] = 1;
        } else {
            valuesObj[valuesArr[i]]++;
        }
    }
    
    console.log(valuesObj); // { '55': 1, '66': 1, '75': 1, '85': 1, '86': 1, '95': 1, '97': 4 }
    
    let result = [];

    for(key in valuesObj) {
        result.push({key: valuesObj[key]});
    }

    // TODO: 1 - 3인데 만약 1위만 존재하거나 1, 2 위만 존재하는 경우. index 문제
    console.log(result.sort((a, b) => -a.key + b.key).slice(0,3).map(item => item.key).reduce((a, b) => a + b));
}

// 39. 오타 수정하기. 모든 q를 e로 바꾸기
{
    let str = 'hqllo my namq is hyqwon';

    const changeStr = function (str) {
        // return str.replaceAll('q', 'e');
        return str.replace(/q/g, 'e');
    }

    console.log(changeStr(str));

    // 답안 방법
    console.log(str.split('q').join('e'));
}

// 40. 놀이기구 무게 제한
{
    let limitWeight = 50;
    
    let howMany = 5;

    // let randomWeight = [20, 20, 20, 20, 20];
    let randomWeight = [20, 20, 20, 20, 20];

    let result = 0;
    
    let tempWeght = 0;
    randomWeight.forEach(item => {
        tempWeght += item;
        if(tempWeght <= limitWeight) {
            result++;
        }
    });

    console.log(result);
}

// 41. 소수 판별
{
    let num = 13;

    let result = true;

    for(let i = 2 ; i < n ; i++) {
        if (num%i === 0) {
            result = false;
            break;
        }
    }

    console.log(result ? '소수 입니다.' : '소수가 아닙니다.');
}

// 42. 20년 a월 b일 무슨 요일?
{
    let month = 5;

    let date = 24;

    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

    let nowDate = new Date(`2020-${month}-${date}`);

    console.log(nowDate);   // 2020-05-23T15:00:00.000Z
    console.log(nowDate.getDay());  // 0
    console.log(day[nowDate.getDay()]); // SUN
}

// 43. 10진수 2진수로 
// 참고: https://unikys.tistory.com/334  js 진법 계산

let ginsu10 = 10;

console.log(ginsu10.toString(2));

// 44. 각 자리수의 합
{
    let num = 18234;

    let numToString = num.toString();

    console.log(numToString);

    let stringToArr = numToString.split('');

    console.log(stringToArr);

    let result = 0;
    stringToArr.forEach(num => {
        result += Number(num);
    });

    console.log(result);

    // 답안 -> 10으로 나눈 나머지 계속 더함.
    let sum = 0;

    while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
    }

    console.log(sum);
}

// 45. Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
// 현재 연도(2021)를 출력해보세요.

let test = new Date();

console.log(test.getTime()/1000);   // 초

console.log(test.getTime()/1000/3600);   // 분

console.log(test.getTime()/1000/3600/24);   // 시

console.log(test.getTime()/1000/3600/24/365);   // 년 

console.log(Math.floor(test.getTime()/1000/3600/24/365) + 1970);   // 현재  2022

// 46. 각자리수 합
{
    let startNum = 10;

    let endNum = 15;

    let tempStr = '';

    for(let i = startNum ; i <= endNum ; i++) {
        tempStr += i;
    }

    console.log(tempStr);   // 101112131415

    let tempArr = [];
    tempArr = tempStr.split('');

    let result = tempArr.reduce((a, b) => Number(a) + Number(b), 0);

    console.log(result);    // 21

}

// 47. set 자료형 응용. 중복 제거. 실제 접수 인원은?
{  
    const people = {
        이호준: "01050442903",
        이호상: "01051442904",
        이준호: "01050342904",
        이호준: "01050442903",
        이준: "01050412904",
        이호: "01050443904",
        이호준: "01050442903"
      };
      
      console.log(people);
 
      let keys = Object.keys(people);
      
      console.log(keys);    // [ '이호준', '이호상', '이준호', '이준', '이호' ]

      console.log(keys.length);

}

// 48. 대소문자 바꿔 출력
{
    // 대문자
    let _regex1 = /^[A-Z]$/;

    // 소문자
    let _regex2 = /^[a-z]$/;

    let str = 'AAABBBcccddd';

    let _result = '';

    for(let i = 0 ; i < str.length ; i++) {
        if (_regex1.test(str[i])) {
            _result += str[i].toLowerCase();
        } else {
            _result += str[i].toUpperCase();
        }
    }

    console.log(_result);   // aaabbbCCCDDD

    // 답안
    let a = 'AAABBBcccddd';
    let b = [];
    let s = '';

    for (let i=0; i<a.length; i++){
        //toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
    if(a[i] === a[i].toLowerCase()){ 
        b.push(a[i].toUpperCase());
    } else {
        b.push(a[i].toLowerCase());
    }
    }

    for (let j=0; j<b.length; j++){
    s += b[j];
    }

}

// 49. 최댓값 구하기
{
    let str = '10 9 8 7 6 5 4 3 2 1';

    let strArr = str.split(' ');

    console.log(strArr);

    console.log(Math.max(...strArr));   // 10

    // 답안
    // let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    //     return parseInt(n, 10);
    // });
    
    strArr.sort((a, b) => {
    return b-a;
    });
    
    console.log(strArr[0]);
}

// 50. 버블 정렬 구하기. 빈칸 채우기 (버블 정렬이란 인접한 배열)
{
function bubble(arr) {
    let result = arr.slice(); 

    for (let i = 0; i < result.length - 1; i++) {
        // 빈칸을 채워주세요 (for문 조건)
        for (let j = 0 ; j < result.length - 1 - i ; j++) {
            if (result[j] > result[j + 1]) {
                //빈칸을 채워주세요.
                let temp = result[j + 1];
                result[j + 1] = result[j];
                result[j] = temp;
            }
        }
    }
        return result;
    }

    // const items = prompt('입력해주세요.').split(' ').map((n) => {
    //     return parseInt(n, 10);
    // });

    const items = [4, 2, 3, 8, 5];

    console.log(bubble(items)); // [ 2, 3, 4, 5, 8 ]

    // 답안 
    // for 조건 for (let j = 0; j < result.length - i; j++)
}

// 51. 병렬정렬
/* 
병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

> 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
> 

출처 : 위키피디아
*/

function mergeSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
  
    while (left.length && right.length){
      
      /*빈칸을 채워주세요*/
      if (left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
        /*빈칸을 채워주세요*/
        result.push(left.shift());
    }
    while (right.length) {
        /*빈칸을 채워주세요*/
        result.push(right.shift());
    }
  
    return result;
  }
  
  const array = [4, 2, 3, 8, 5];
  
  console.log(mergeSort(array));

// 52. quick sort
{
    function quickSort(arr){
        if (arr.length <= 1){
          return arr;
        }
      
        const pivot = arr[0];
        const left = [];
        const right = [];
      
        for (let i=1; i<arr.length; i++){
          /*빈칸을 채워주세요*/
          if(arr[i] < pivot){
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }

        /*빈칸을 채워주세요*/
        return quickSort(left).concat(pivot, quickSort(right));
      }
      
    const array = [4, 2, 3, 8, 5];
      
    console.log(quickSort(array));
}

// 53. 괄호 문자열
/**
괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**
*/
{
    function mathBrackets(e){
        let count = 0;
        
        //괄호 개수가 같지 않으면 false
        for (let i=0; i<e.length; i++){
            if (e[i] === '('){
                count++;
            }
            if (e[i] === ')'){
                count--;
            }
        }
        if (count !== 0){
            return false;
        }
        
        let 괄호 = [];
        for (let i in e){
            if (e[i] === '(') {
                괄호.push('(');
            }
                
            if (e[i] === ')') {
                if (괄호.length === 0) {
                    return false;
                }
                괄호.pop();
            }   
        }
        return true;
    }
        
    
    const n = '()()'
    
    if (mathBrackets(n) === true) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

// 54. 연속된 수 여부 체크
{
    let inputStr = '1 2 3 4 5';

    let inputStr2 = '1 4 2 6 3';

    let inputArr = inputStr.split(' ');

    let input2Arr = inputStr2.split(' ');

    console.log(inputArr);
    console.log(input2Arr)

    const numCheck = function (arr) {
        let _result = true;
        for(let i = 0 ; i < arr.length - 1 ; i++) {
            if(Math.abs(Number(arr[i]) - Number(arr[i + 1])) !== 1) {
                _result = false;
                break;
            }
        }

        return _result;
    }

    console.log(numCheck(inputArr));
    console.log(numCheck(input2Arr));

    // 답안
    // 답안에서 말하는 연속된 수란 내부적 순서는 상관이 없음.
    function sol(l){
        l.sort((a,b) => {
          return a-b;
        });
      
        for (let i=0; i<l.length-1; i++){
          if(l[i]+1 !== l[i+1]){
            return 'NO';
          }
        }
        return 'YES';
      }
      
      console.log(sol(inputArr));
}

// 55. 하노이의 탑
/**
    하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다. 하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 이 게임에서는 다음의 규칙을 만족해야 합니다.

    > 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
    2. 모든 원판의 지름은 다르다.
    3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
    4. 작은 원반 위에 큰 원반을 놓을 수 없다.
    5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.
    > 

    이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
    모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.
 */
{
    const route = [];

    function hanoi(num, start, end, temp){
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num-1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num-1, temp, end, start);
    }

    hanoi(3, 'A', 'B', 'C');
    console.log(route);
    console.log(route.length);
}

// 56. 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
{
    nationWidth = {
        'korea': 220877,
        'Rusia': 17098242,
        'China': 9596961,
        'France': 543965,
        'Japan': 377915,
        'England' : 242900,
    }

    let tempKor = nationWidth['korea'];

    let keys = Object.keys(nationWidth);

    console.log(keys);

    let tempNum = 0;

    for(nation of keys) {

        if (Math.abs(nationWidth[nation] - nationWidth['korea']) === 0) {
            // 동일 국가
        }else if (tempNum === 0) {
            tempNum = nationWidth[nation];
        } else if(Math.abs(nationWidth[nation] - nationWidth['korea']) < Math.abs(tempNum - nationWidth['korea'])) {
            tempNum = nationWidth[nation];
        }
    }

    console.log(tempNum);   // 242900

    console.log(keys.find(item => nationWidth[item] === tempNum));  // England

    // 답안
    const w = nationWidth['korea'];

    delete nationWidth['korea'];

    const entry = Object.entries(nationWidth);
    console.log(entry);
    const values = Object.values(nationWidth);
    console.log(values);

    //gap에 최댓값 저장
    let gap = Math.max.apply(null, values);
    let item = [];

    for (let i in entry){
        if (gap > Math.abs(entry[i][1] - w)){
            gap = Math.abs(entry[i][1] - w);
            item = entry[i];
        }
    }

    console.log(item[0], item[1] - w);

}

// 57. 0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠. 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
{
    let _result = 0;

    for (let i = 0 ; i <= 1000 ; i++) {
        let str = String(i);

        let arr = str.split('');

        _result += arr.filter(item => Number(item) === 1).length;
    }

    console.log(_result);   // 301

    // 답안
    {//1번 답안 - 고전적인 방법
    const obj = {};

    for (let i = 0; i <= 1000; i++) {
        let tmp = i;
        while (tmp > 0) {
            let num = tmp % 10;
            if (obj[num]) {
                obj[num]++;
            } else {
                obj[num] = 1;
            }
            tmp = parseInt(tmp/10, 10);
        }
    }
    console.log(obj[1]);
}
    //2번 답안 - 정규표현식 사용
{
    let s = '';
    for(let i = 0; i <= 1000; i++){
    s += i;
    }
    // console.log(s);
    console.log(s.match(/1/g).length);
}

    //3번 답안 - for in 사용
{    
    let s = '';
    for(let i = 0; i <= 1000; i++){
    s += i;
    }
    let count = 0;
    for(let j in s){
    if(s[j] == 1){
        count++;
    }
    }
    console.log(count);
}
    //4번답안 - for of 사용
    {
        let s = '';
        for(let i = 0; i <= 1000; i++){
        s += i;
        }
        let count = 0;
        for(let j of s){
        if (j == 1){
            count++;
        }
        }
        console.log(count);
    }
}

// 58. 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.
// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
{
    let num = 123456789;

    let str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    console.log(str);

    // 답안
    // 내장함수 사용
    console.log(num.toLocaleString());

    // 재귀함수 사용
    function comma(s = []) {
    if (s.length <= 3) {
        return s;
    } else {
        return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
    }
    }

    // console.log(comma(num));
}

// 59. 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
{
    const strLength = 50;

    let inputStr = '567';

    let frontStrLength = Math.floor((50 - inputStr.length) / 2);
    // let backStr = strLength - inputStr.length - frontStr;

    let _result = '';

    for(let i = 0 ; i < frontStrLength; i++) {
        _result += '='
    }
    _result += inputStr;

    for(let i = _result.length ; i < strLength; i++) {
        _result += '='
    }

    console.log(_result);   // =======================567========================

    console.log(_result.length);   // 50

    // 답안
    const str = '567';

    const n = 25 + parseInt((str.length/2), 10);

    //왼쪽부터 채우기
    const a = str.padStart(n, '='); 

    //오른쪽까지 채워서 출력
    console.log(a.padEnd(50, '='));

    //padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
    //padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
}

// 60. 번호 매기기 새 학기가 되어 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다. 데이터에 입력된 이름을 아래와 같이 출력해 주세요.
{
    const students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];

    let studentsSorting = students.sort();

    const result = [];

    for(let i = 0 ; i < studentsSorting.length ; i++) {
        result.push({
            '번호': i + 1,
            '이름': studentsSorting[i]
        });
    }
    
    console.log(result);
}

// 61. 문자열 압축하기
// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
{
    let inputValue = 'aaabbbbcdddd';

    let inputValueArr = inputValue.split('');

    let obj = {};

    for (val of inputValueArr) {
        if (obj[val] !== undefined) {
            obj[val]++;
        } else {
            obj[val] = 1;
        }
    }

    console.log(obj);   // { a: 3, b: 4, c: 1, d: 4 }

    let keys = Object.keys(obj);

    let result = '';

    for (key of keys) {
        result += key + obj[key];
    }

    console.log(result);    // a3b4c1d4
}
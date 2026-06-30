//  주석
console.log("멀티캠퍼스 강의중..");

//  변수

const userID = "chutzrit";
console.log("userId",userID);

let userName = "김탕도";
console.log("userName", userName);

//미션 :
//적절한 변수명에 여러분의 이름을 담아서 변수 만들기
//console에 찍어서 확인하기

const userName2 = "김상호";

userName = "kkkkk";
console.log("userName2", userName2);

// 데이터 타입 
const userAge = 33; // 숫자 
const userMBTI = "ENTJ"; //문자열
console.log("🚀 ~ userMBTI:", userMBTI);

// boolean타입
const isLoggedin = true;
console.log("🚀 ~ isLoggedin:", isLoggedin);
console.log("Type isLoggedin", typeof isLoggedin);

// null/undefined
const empty = null;
let empty2;
console.log("🚀 ~ empty2:", empty2)

// 미션: 나머지 변수들도 타입확인하는 코드 작성해서 콘솔에 찍어보기 
console.log("Type empty", typeof empty);
console.log("Type empty2", typeof empty2);
console.log("Type userAge", typeof userAge);

// 함수 
// 함수 정의 
function greeting() {
  // 로직 
  // 목표: "???님, 반갑습니다" 문자열을 콘솔에 찍기

  // 1. 사용자 이름 담을 변수 선언  
  // 2. 사용자에게 이름 받아와서 변수에 담기 
  const inputUserName = window.prompt("이름을 입력해주세요.");
  console.log("🚀 ~ greeting ~ inputUserName:", inputUserName);


  // 3. "변수 + 님, 반갑습니다" 문자열 완성하기 
  const result = `${inputUserName} 님, 반갑습니다`;
  // 4. 완성된 문자열 콘솔에 찍기 
  console.log(result);

}

// greeting();

const greetingInput = (name) => {
  console.log(`${name}님, 반갑습니다`);
};

greetingInput("후츠릿");
greetingInput("김상호");
greetingInput("노태호");
greetingInput("이재욱");

const add = (num1, num2) => {
  console.log("🚀 ~ add ~ num1:", num1);
  console.log("🚀 ~ add ~ num2:", num2);
  return num1 + num2;
}
const doubleSum = (num) => {
  return num * 2;
}

const addResult = add(10,30);
const result = doubleSum(addResult);
console.log("🚀 ~ result:", result);

// 미션 : 소문자의 텍스트를 받아와서 대문자로 변환한 값을 반환하는 함수 만들기 

const UpperFn = (str1) => {
  return str1.toUpperCase();
}
const LowerFn = (str) => str.toLowerCase();

const upperResult = UpperFn("kim");
console.log("🚀 ~ upperResult:", upperResult)

const lowerResult = LowerFn("KIM");
console.log("🚀 ~ lowerResult:", lowerResult)

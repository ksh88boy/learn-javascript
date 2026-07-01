// Logical Operator: 논리적인 true, false를 판단하여 반환

/**
 * 1. AND(&&)
 * 2. OR(||)
 * 3. NOT(!)
 */

const user = {
  isLoggedIn: false,
  role: "admin" // 다른 값으로 "guest", "user" 가 있음  
}

// 관리자 페이지 접근 여부 확인  
/**
 * 조건1: 로그인 된 상태일 것.
 * 조건2: role이 관리자 일 것.
 */
if(user.isLoggedIn && user.role === "admin"){
  // 관리자 페이지 접근 가능한 상태
  console.log("✅ 관리 페이지 접근 가능✅");
} else {
  // 관리자 페이지 접근 불가능한 상태 
  console.log("❌ 관리페이지 접근 불가능");
}

// or 연산자
// 조건: 성인(18세이상)인지 혹은 부모의 동의를 받았는지 확인
const person = {
  age: 18,
  hasParetalConsent: false
}

// 삼항 연산자
// 조건 ? value1 : value2 
const guideText = person.age >=18 || person.hasParetalConsent ? "✅ 서비스 접근가능" : "❌ 서비스 접근 불가능";
console.log("🚀 ~ guideText:", guideText);

// not연산자: 반전
/**
 * 자바스크립에서 false로 간주되는 것들
 * 1. 0
 * 2. null/undefined
 * 3. "" <- 빈문자열 
 */

const userInput = "   f     ";

// 사용자 입력값 비어있는지 체크 
if(!userInput.trim()){
  // 입력값이 비어있는 경우 
  console.log("입력값이 비어있습니다. 값을 입력하세요");
}

// 미션: 아래 조건에 모두 부합하는 경우 콘텐츠 배포
// 조건 1: 티스토리 블로그에 로그인 세션이 있는 경우
// 조건 2: AI가 작성한 글의 품질 게이트 점수가 95점 이상인 경우

const blog_info = {
  loggedin: true ,
  score: 90
}
const contentdb = blog_info.loggedin && blog_info.score >= 95 ? "콘텐츠 배포" : "콘텐츠 배포 불가";
console.log("🚀 ~ contentdb:", contentdb);


// Default Parameter: 파라미터 기본값 지정
const greeting = (name = "사용자") => {
  console.log(`${name}님, 반갑습니다`);
}

greeting();
greeting("노태호");

// object destrcturin 구조분해 할당
// 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아주는 것

const colors = ["red", "green", "blue"];

// 구조분해 할당 
const [first, second] = colors;
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

const guest = {
  userName: "후츠릿",
  id: "chutzrit",
  age: 11
};

// const userName = guest.userName;
// const userId = guest.id;
// const userAge = guest.age; 

const { userName, id:userId } = guest;
console.log("🚀 ~ userName:", userName);
console.log("🚀 ~ userId:", userId);

// Spread Syntax: 배열이나 객체를 개뱔요소로 분해하거나 결합할때 사용 
const newColors = ["brown", ...colors, "purple",  "beige"];
console.log("🚀 ~ newColors:", newColors);

const newGuest = {...guest, mbti: "INTP", userName: "후츠릿->수정"};
console.log("🚀 ~ newGuest:", newGuest);

// 미션 오늘의 할일 추가
// todoItem에 오늘 할일 데이터 추가, isComplete의 값을 true 로 변경하는 새로운 객체 만들기
// 조건: spred systax 문법으로 만들 것
const todoItem = {
  id: 1,
  isComplete: false
}

const newtodoItem = {...todoItem, isComplete: true};
console.log("🚀 ~ newtodoItem:", newtodoItem);

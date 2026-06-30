// 조건문
// 목표: 점수가 60점 이상이면 "합격"출력

const score = 50;

// if (score >= 60){
//   // 조건식이 true면 실행할 로직 
//   console.log("합격");
// } else {
//   console.log("불합격");
// }

// 삼항 연산자
console.log(score >= 60 ? "합격" : "불합격");


console.log("종료");


// 등급 
let grade;

if(score >= 90){
  grade = "A";
}else if(score >= 80){
  grade = "B";
}else if(score >= 70){
  grade = "C";
}else{
  grade = "D";
}
console.log(`${grade}등급입니다`);


//미션 개발자 테스트 

const checkLebel = () => {
  const userName3 = window.prompt("이름입력");
  const html_sc = window.prompt("HTML 점수입력");
  // console.log("🚀 ~ checkLebel ~ html_sc:",  typeof html_sc);
  
  const css_sc = window.prompt("CSS 점수입력");
  const java_sc = window.prompt("JavaScript 점수입력");

  const averageScore = avg_sc( html_sc, css_sc, java_sc);
  console.log("🚀 ~ checkLebel ~ averageScore:", averageScore);
  
  let level = "";
  if (averageScore >= 90 ){
    level = "개발자 마스터";
  }else if (averageScore >=70){
    level = "실전 투입 가능";
  }else if (averageScore >=50){
    level = "성장중인 개발자";
  }else{
    level = "처음부터 다시";
  }

  return `${userName3}님 레벨: ${level}`;
};

const avg_sc = (num1, num2, num3) => {
  const total = Number(num1) + Number(num2) + Number(num3);
  return total / 3;
};

// //레벨테스트 함수호출
// const developerLevel = checkLebel();
// console.log("🚀 ~ developerLevel:", developerLevel);

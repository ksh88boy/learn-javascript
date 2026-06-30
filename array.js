
// 배열
const daysofWeek = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];
console.log("🚀 ~ days0ofWeek:", typeof days0ofWeek);
console.log("🚀 ~ daysofWeek:", daysofWeek);

const today = daysofWeek[1];
console.log("🚀 ~ today:", today);

// 미션: 내가 제일 좋아하는 요일 뽑아와서 콘솔에 찍어보기
const pick_day = daysofWeek[5];
console.log("🚀 ~ pick_day:", pick_day);

const student = {
  name: "김상호",
  mbti: "INTP",
  favoriteColor: ["green", "yellow", "brown", "purple"]
};
console.log("🚀 ~ student:", student);

// 객체에서 이름 뽑아오기 
console.log("student.name", student.name);

// 미션: mbti, "brown" 값 뽑아와서 콘솔에 찍기
console.log("student.mbti", student.mbti);
console.log("student.mbti", student["mbti"]);
console.log("student.Color", student.favoriteColor[2]);
console.log("favrotieColor size:", student.favoriteColor.length);

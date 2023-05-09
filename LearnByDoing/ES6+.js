// 삼항 연산자 ( tenary Operator)

const test = 5;

if (test === 2) {
  console.log("2입니다.");
} else {
  console.log("2가 아닙니다.");
}

console.log("-------");

const result = test === 2 ? "2입니다." : "2가 아닙니다.";
// test가 2라면, "2입니다." 반환
// 2가 아니라면, "2가 아닙니다." 반환
console.log(result);

console.log("-------", "\n");

//  ---------------------------------------------------------------------------------------------------------------------------------------
// nullish coalescing 연산자 + Logical OR 연산자 ( nullish, falsy )

// nullish , falsy , truthy
// nullish 값 :  null, undefined
// falsy 값  : 0, -0, '', false, NaN, null, undefined
// nullish coalescing operator (??) 는 nullish 만 판단 -> 0 , 빈문자열 등은 true로 반환한다.
// or 연산자, || 연산자는 falsy 값 들을 false로 판단한다.
// nullish한 값들이 falsy한 값들에 속한다 (subset개념)
// truthy

const msgOfNull = null;
const msgOfUndefined = undefined;
const msgOfEmptyString = "";
const msgOfZero = 0;

console.log("\n", "nullish coalescing 연산자 ");
console.log(" - null :", msgOfNull ?? "nullish");
console.log(" - Undefined : ", msgOfUndefined ?? "nullish");
console.log(" - EmptyString : ", msgOfEmptyString ?? "nullish");
console.log(" - Zero : ", msgOfZero ?? "nullish");
console.log(" - String : ", "문자열" ?? "nullish");
// null , undefined 일 때만 ?? 오른쪽 코드가 실행된다.

console.log("\n", "Logical OR 연산자 ");
console.log(" - null :", msgOfNull || "falsy");
console.log(" - Undefined : ", msgOfUndefined || "falsy");
console.log(" - EmptyString : ", msgOfEmptyString || "falsy");
console.log(" - Zero : ", msgOfZero || "falsy");
console.log(" - String : ", "문자열" || "falsy");
// null , undefined를 포함하여 빈 문자열, 0 등 falsy한 값의 경우 || 오른쪽 코드가 실행된다.

//  ---------------------------------------------------------------------------------------------------------------------------------------
// templaste Literals

const msgHi = "안녕하세요.";
const msgBye = "안녕히가세요.";

console.log("문자열 조합");
console.log("만날 때는 " + msgHi + " 헤어질 때는 " + msgBye);
console.log("템플릿 리터럴");
console.log(`만날 때는 ${msgHi} 헤어질 때는 ${msgBye}`);

// 문자열 조합으로 문자열과 변수를 합칠 때는, 띄어쓰기 등 어색하게 고려할 점이 많지만,
// 템플릿 리터럴 사용 시, 하나의 문장 안에 변수를 ${} 를 통해 삽입할 수 있다.
// 개발의 편의성 뿐만 아니라 가독성도 높아진다.

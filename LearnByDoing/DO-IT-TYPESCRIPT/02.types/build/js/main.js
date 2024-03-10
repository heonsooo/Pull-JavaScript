"use strict";
//** 모든 타입 작성해보기 */
// Boolean
let boolean;
let falseBoolean = false;
// Number
let num;
let numberoZero = 0;
let floatNumber = 0.2;
// String
let string;
let stringName = "Soo";
let firstName = "Doo";
// Array : 한 가지 타입만 가질 수 있는 배열
let stringArray = ["a", "b", "c"];
let stringArray2 = ["a", "b", "c"];
let numberArray = [1, 2, 3];
let numberArray2 = [1, 2, 3];
let undefinedArray = [undefined, undefined];
// let combineArray: string[] = [1, "a"]; // Error
// let aa = stringArray.push(1); // Error
// Array : 여러 가지 타입을 가질 수 있는 배열 (Union Type 사용)
let mixedArray = ["a", 1];
let mixedArray2 = ["a", 1];
// Array : any (타입을 지정할 수 없을 경우)
let anyArray = [1, "a"];
let anyArray2 = [1, "a"];
// Array : 읽기 전용 배열 (readonly , ReadonlyArray)
let ReadonlyStringArray = ["a", "b", "c"];
let ReadonlyNumberArray = [1, 2, 3];
// let ReadonlyStringArray2: readonly Array<string> = ["a", "b", "c"]; // Error
// ReadonlyStringArray.push("d"); // Error
// ReadonlyNumberArray[0] = 2; // Error
// tuple : 고정된 요소 수 만큼의 타입을 미리 선언 후 배열을 표현
let tuple = [1, "a", false];
tuple.push("a"); // tuple이라 하더라도 Array이기 때문에 값을 추가하는 push는 가능하다.
tuple.push(false);
// tuple.push(null); // Error : 하지만, push가 가능하더라도 선언한 타입만 push 가능하다. (number, string, boolean 중 하나의 타입 )
// tuple[0] = true; // Error
// tuple[1] = 1; // Error
let tupleOfArray = [
    [1, "a"],
    [2, "b"],
];
tupleOfArray.push([3, "c"]); // OK
// tupleOfArray.push("a"); // Error
// tupleOfArray.push([4, "d", false]); // Error
// any : 어떤 타입이어도 상관없는 타입
let any = "abc";
any = 123;
any = [];
// unKnown : 알 수 없는 타입.
// - 어떠한 값도 할당이 가능하기 때문에 any와 유사하다.
// - 하지만, any보다 Type - safe한 타입이다.
//    => 예를 들어 any 타입은 다른 타입으로 할당이 가능하지만, "unknown 타입은 다른 타입으로 할당할 수 없다."
//    (Type Guard를 통해 타입을 한정시키는 것이 가능하다.)
//    => any보다 unknown을 사용하는 것이 좋다.
// "unknown 타입의 변수에는 값을 할당가능하지만, unknown타입의 변수를 다른 타입을 가진 변수에 할당 할 수는 없다."
let isUnknown;
isUnknown = true; // OK
isUnknown = "abc"; // OK
isUnknown = 123; // OK
let isNumber = 2;
// isNumber = isUnknown; // Error : unknown 타입은 다른 타입으로 할당할 수 없다.
isNumber = isUnknown; // Type Assertion(타입 단언 : 개발자가 직접 해당 변수의 타입 지정하여 에러를 발생시키지 않도록 하는 것)을 통해 할당 가능하다.
let abcd = "abcd";
isNumber = abcd; // ?????????
// console.log("====>isNumber", isNumber, typeof isNumber);
// object : 객체타입 (원시타입을 제외한 모든 객체타입을 의미)
let obj = {};
let arr = [];
let date = new Date();
// let null : object = null;  // Error : null은 원시타입으로 객체가 아니다. tsconfig.json의 "strict" 옵션을 true로 설정하면 에러가 발생한다. (false : 에러가 발생하지 않는다.)
// object 타입 선언 시 객체의 속성에 대한 타입을 지정할 수 있다.
let user = {
    name: "Soo",
    age: 28,
};
let user2 = {
    name: "Soo",
    age: 28,
};
// union type : 두 개 이상의 타입을 허용하는 타입
let union = "a";
union = 2;
union = 23 + "a";
// union = []; // Error : string | number 타입이기 때문에 배열은 할당할 수 없다.
// function : 함수타입
// void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
let func;
func = function (x, y) {
    return x + y;
};
let func2 = function (x, y) {
    return x + y;
};
// console.log(func(1, 2));
// console.log(func2(1, 2));
let func3;
func3 = function (a, b) {
    // console.log(a, b);
};
// func3("aab", "asd");
// null , undefined : strictNullChecks 옵션이 false일 경우, 어떠한 type에도 할당이 가능하다.
let nullValue = null;
let undefinedValue = undefined;
// strictNullChecks 옵션이 false일 경우, undefined / null을 다른 타입에 할당할 수 있다.
// 아래 예시 처럼 null / undefined를 다른 타입에 할당할 수 있다.
// let nullValue2: undefined = null;
// let undefinedValue2: null = undefined;
// let numberTest: number = undefined;
// let numberTest2: number = null;
// let stringTest: string = undefined;
// let stringTes2t: string = null;
// 그러니, strictNullChecks 옵션을 true로 설정하는 것이 좋다.
// strictNullChecks 옵션이 true일 경우, null / undefined는 각각 null / undefined 타입에만 할당이 가능하다.
// nullValue = 23; // Error : null 타입에는 null만 할당 가능하다.
// undefinedValue = 23; // Error : undefined 타입에는 undefined만 할당 가능하다.
let voidValue = undefined; // 하지만, void 타입에는 undefined 타입만은 할당 가능하다.
// Void : 어떠한 타입도 가질 수 없는 타입
function returnVoid(msg) {
    // console.log(msg);
    // return undefined;
}
// 실제로는 함수가 아무것도 리턴하지 않을 때는 undefined를 반환하지만,
// void 타입은 undefined만을 반환할 수 있다.
const returnVoidFunc = returnVoid("hi void");
// console.log(returnVoidFunc); // undefined
function returnVoid2(msg) {
    // console.log(msg);
    // return undefined;
}
// const returnVoidFunc2: undefined = returnVoid2("hi void2"); // void 타입은 undefined만을 반환할 수 있다.
// console.log("returnVoidFunc2==>", returnVoidFunc2); // undefined
function returnVoid3(msg) {
    console.log(msg);
    // return undefined;
}
// const returnVoidFunc3: void = returnVoid3("hi void3"); // 함수의 반환값이 undefined 경우, 반환값을 void로 지정할 수 있다. => void 타입은 undefined 타입을 포함한다.
// console.log("returnVoidFunc3==>", returnVoidFunc3); // undefined
// never : 절대 발생하지 않는 값
// 항상 오류를 출력하거나 return 값을 절대 내보내지 않는 함수의 반환 타입으로 사용된다.
// 항상 오류 출력
function error(message) {
    throw new Error(message);
}
// const aa: never = error("error 발생");
// console.log("aa==>", aa); // never 타입은 절대 발생하지 않는 값이기 때문에 어떠한 값도 할당할 수 없다.
// 함수가 끝나지 않는 경우 (무한루프
function infiniteLoop() {
    while (true) {
        // console.log("infiniteLoop");
    }
}
// 빈 배열을 타입으로 선언하면, never 타입과 유사하다.
let list2 = [];
// list2.push(1); // Error : never 타입은 어떠한 값도 할당할 수 없다.
let list = []; // 빈 배열을 타입으로 선언하면 해당 배열에는 어떠한 값도 할당할 수 없다. => never 타입과 유사하다.
// list.push(1); // Error : 빈 배열에는 어떠한 값도 할당할 수 없다.

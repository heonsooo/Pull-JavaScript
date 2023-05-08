// 객체 리터럴. (객체 생성 표기법 : 코드로서 객체 생성)
let box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: "red",
};

// function makeBox(width, height, borderRadius, backgroundColor)
//   return {
//     width : width,
//     height : height,
//     borderRadius : borderRadius,
//     backgroundColor : backgroundColor,
//   };

function makeBox(width, height, borderRadius, backgroundColor) {
  return {
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
  };
}

const boxByFuntion = makeBox(100, 100, 10, "black");
console.log("boxByFuntion : ", boxByFuntion);

class Shape {
  width;
  height;
  borderRadius;
  backgroundColor;
  constructor(width, height, borderRadius, backgroundColor) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, "blue");
console.log("boxShape : ", boxShape);
console.log(boxShape instanceof Shape ? "참" : "거짓");

// 객체 속성 추가
box.color = "black";
console.log("box  : ", box);
console.log("boxByFuntion : ", boxByFuntion);

// 객체 속성 삭제
delete box.color;
console.log("====delete box.color===");
console.log("box  : ", box);
console.log("boxByFuntion : ", boxByFuntion);
// 객체 변환/ 객체 합치기

// 객체는 참조 타입이기 때문에
// 변수에 기존 객체를 담은 변수를 할당하면 새로운 객체가 아닌 기존 객체를 참조하게 된다.
console.log("=====객체  참조====");
const box3 = box;
console.log("box3: ", box3, "\n", "box :", box);

// 객체 원본을 바꿔야 하는 경우 ( = 참조를 끊어내야 하는 경우 = 객체를 복사하는 경우)
// 객체의 값만 복사하는 방법 4가지
// 1. Object가 제공하는 assign 메소드 이용 -> 첫 번째 인자에게 두번째 이후 인자들을 모두 overWrite한다.
// 2. 전개연산자를 이용해서 새로운 객체를 만들고 거기에 기존 객체를 모두 풀어 헤쳐 전개시킨 다음에 재구성하여 새로운 객체에다가 넣는 방법.
// 3. 복사하고자 하는 객체를 문자열로 만든 후 다시 문자열을 객체로 만든다. -> 원시적인 방법이지만, 확실한 방법
const boxCopy = box; // 객체 참조
const boxCopy1 = Object.assign({}, box); // 객체 복사
const boxCopy2 = { ...box }; // 객체 복사
const boxCopy3 = JSON.parse(JSON.stringify(box)); // 객체 복사

box.width = 500;
console.log("boxCopy: ", boxCopy);
console.log("boxCopy1: ", boxCopy1);
console.log("boxCop2y: ", boxCopy2);
console.log("boxCo3py: ", boxCopy3);

// ---------------------------------------------------------------------------
// 객체 Destructuring assignment

// boxCopy  =  {width: 500, height: 200, borderRadius: 5, backgroundColor: 'red'}

//Destructuring assignment를 이용하면 객체명.key이름 으로 접근해야 하는 방법을 사용하지 않고

const w1 = boxCopy.width;
const h1 = boxCopy.height;
// 대괄호 안에서 키 값으로 해당 객체 내의 value를 할당할 수 있습니다.
// 이때 key : 새로 짓고 싶은 변수명을 통해서 해당 key의 value 값을 다른 변수에 할당할 수 있습니다.
const { width, height } = boxCopy;
const { width: w2, height: h2 } = boxCopy;

console.log("w1, h1:", w1, h1);
console.log("w2, h2:", w2, h2);

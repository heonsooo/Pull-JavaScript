// "use strict";
// //this란 무엇인가?
// //this는 함수 내에서 함수 호출 맥락(context)를 의미한다.
// //this는 함수를 호출할 때, 그 함수를 호출한 주체에 따라서 동적으로 결정된다.
// //this는 어떻게 함수가 호출되었는지에 따라 달라진다.
// //함수를 호출할 때, . 앞에 있는 것이 this가 된다.
// //this는 함수를 호출할 때 결정된다.
// //this는 함수를 호출할 때마다 달라질 수 있다.
// //this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 결정된다.
// //this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 달라진다.
// //this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 동적으로 결정된다.
// //this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 동적으로 바인딩된다.
// // this 예시

// console.log(" this ===>", this);

// function foo(argMsg) {
//   console.log(`${argMsg} foo() ===> `, this);
// }
// foo(); // window

// const obj = {
//   name: `obj`,
//   foo,
// };
// const obj2 = {
//   name: `obj2`,
// };
// const obj3 = {
//   name: `obj3`,
// };
// const obj4 = {
//   name: `obj4`,
// };
// obj.foo("this is obj"); // obj

// const bar = obj.foo;
// bar("this is bar "); // window

// foo.call(obj2, "this is call"); // obj ==> foo함수의 this를 명시적으로 obj2로 지정
// foo.apply(obj3, ["this is apply"]); // obj ===> foo함수의 this를 명시적으로 obj3로 지정

// const bindFoo = foo.bind(obj4);
// bindFoo("this is bind"); // obj ===> foo함수의 this를 명시적으로 obj4로 지정

// // ## C3 화살표 함수에서의 this
// // 화살표 함수에서의 this는 함수를 선언할 때 결정된다.
// const heyFn = {
//   list: [1, 2, 3],
//   getList() {
//     setTimeout(function () {
//       console.log("heyFn this ===>", this);
//       console.log("heyFn this.list ===>", this);
//     }, 2000);
//   },
// };

// const heyArrow = {
//   list: [1, 2, 3],
//   getList() {
//     setTimeout(() => {
//       console.log("heyArrow this ===>", this);
//       console.log("heyArrow this.list ===>", this.list);
//     }, 2000);
//   },
// };

// heyFn.getList(); // [1, 2, 3]
// heyArrow.getList(); // [1, 2, 3]
// // 화살표 함수에서의 this는 함수를 선언할 때 결정된다. => 어휘적 바인딩(lexical binding) => 스코프 체인(scope chain) => this 결정
// // 화살표 함수에서의 this는 스코프 체인(scope chain)에 의해 결정된다.
// // 어휘적 바인딩(lexical binding)에 의해 결정된다.

// // 디버거로 알아보자
// const debugThis = {
//   a: () => {
//     debugger;
//     console.log("debugThis Of Arrow this ===>", this);
//   },
//   b: function () {
//     debugger;
//     console.log("debugThis Of Function this ===>", this);
//   },
// };

// debugThis.a(); // window
// debugThis.b(); // debugThis
// // ## C4 생성자 함수에서의 this
// // 생성자 함수에서의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
// function Person(name) {
//   this.name = name;
//   console.log("this ===>", this);
// }
// const me = new Person("me"); // Person { name: 'me' }
// console.log("me ===>", me);

// 짐코딩 this 예제
// 자바스크립트에서의 this는 객체를 가리키는 **키워드**이자 **객체**이다.
// 어떤 객체인가? => 함수를 호출할 때, 함수를 호출한 주체에 따라서 동적으로 결정되는 객체이다. 즉, 함수를 호출한 객체가 해당 this이다. (// this는 함수를 호출할 때마다 달라질 수 있다.)
// 함수를 호출한 대상이 없을 때, this는 전역 객체 window이다.
// 자바스크립트에서의 this는 객체를 가리키는 **키워드**이자 **객체**이다.
// 어떤 객체인가? => 함수를 호출할 때, 함수를 호출한 주체에 따라서 동적으로 결정되는 객체이다. 즉, 함수를 호출한 객체가 해당 this이다. (// this는 함수를 호출할 때마다 달라질 수 있다.)
// 함수를 호출한 대상이 없을 때, this는 전역 객체 window이다.
function myFunction(type) {
  console.log("myFunction this :", type, this, this?.name);
  setTimeout(function () {
    console.log(
      "myFunction setTimeout normal Function this :",
      type,
      this,
      this?.name
    );
  }, 100);

  setTimeout(() => {
    console.log(
      "myFunction setTimeout arrow Function this :",
      type,
      this,
      this?.name
    );
  }, 100);
}

// myFunction("기본함수"); // 전역 객체(window 또는 global)를 출력

const testObj = {
  name: "testObj",
  myFunction,
};
// testObj.myFunction("객체 참조함수"); // testObj를 출력
// this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 동적으로 결정된다.

// ============================================== 03.03

// case 1. 전역 문맥

// 전역 문맥에서 this는 window 객체를 가리킨다.
// window 객체는 브라우저에서 가지고 있는 전역 객체이다.
console.log(this); // window

// case 1-2. strict 모드에서 전역 문맥
// strict 모드에서 전역 문맥에서 this는 window이다.
console.log(this); // window

// ----------------------------------------------

// case 2. 함수 내부에서의 this
function myFunction() {
  console.log("myFunction this ===>", this);
}

// 일반적인 함수 내부에서의 this는 함수를 호출한 객체의 this를 가리킨다.
// 여기서는 함수를 호출한 객체가 없으므로 전역 객체인 window를 가리킨다.
// 왜냐하면 myFunction은 window.myFunction으로 호출되었기 때문이다. (window.myFunction()과 같다.)
myFunction(); // window

// case 2-1. strict 모드의 함수 내부에서의 this
function myFunctionOfStrict() {
  "use strict";
  console.log("myFunctionOfStrict this ===>", this);
}
// strict 모드에서 함수 내부에서의 this는 undefined이다.
// 여기서는 함수를 호출한 객체가 없지만 strict 모드에서는 위와는 다르게 undefined를 가리킨다.
myFunctionOfStrict(); // undefined

// ----------------------------------------------
// case 3. 객체 메소드에서의 this
const myObject = {
  name: "IcedAmericano",
  myMethod(type = "") {
    console.log("myObject.myMethod this ===>", type, this);
  },
};
// 객체 메소드에서의 this는 해당 메소드를 호출한 객체를 가리킨다.
// 여기서는 myObject객체가 myMethod를 호출했으므로 this는 myObject를 가리킨다.
// 따라서 this는 함수를 호출한 객체이다.
// 이것이 유용한 이유는 객체의 메소드를 다른 변수에 할당하거나 다른 객체에게 전달할 때 this가 호출한 객체를 가리키기 때문이다.
// 예시로 아래에서 myMethod2에 myObject.myMethod를 할당하고 myMethod2를 호출하면 this는 전역 객체를 가리킨다.
// 따라서 객체의 메소드를 다른 변수에 할당하면 this는 전역 객체를 가리킨다.
myObject.myMethod(); // myObject

// 객체의 메소드를 다른 변수/객체에 할당하면 this는 전역 객체를 가리킨다.
const newMethod = myObject.myMethod;
newMethod(); // window

// case 3-2
// 함수가 object 밖에서 정의되었던, 내부에서 정의 되었던 상관없이 this는 함수를 호출한 객체를 가리킨다.
// 함수가 어디서 정의 되었는지는 중요하지 않다.
function myMethod2(params) {
  console.log("myMethod2 this ===>", this);
}

const myObject2 = {
  name: "IcedAmericano2",
  myMethod2,
};

myObject2.myMethod2(); // myObject2

const newMethod2 = myObject2.myMethod2;
newMethod2(); // window

// case 3-3
// 객체 내 객체의 메소드를 호출할 때 this는 해당 객체를 가리킨다.
// 아래와 같이 myObject3.mySubObject3.myMethod3()을 호출하면 this는 myObject3를 가리킨다.
function myMethod3(params) {
  console.log("myMethod3 this ===>", this);
}

const myObject3 = {
  name: "IcedAmericano3",
  mySubObject3: {
    name: "subIcedAmericano",
    myMethod3,
  },
};

myObject3.mySubObject3.myMethod3(); // myObject2

const newMethod3 = myObject3.mySubObject3.myMethod3;
newMethod3(); // window

// case 3-4
// 위에서 처럼 호출한 객체가 아닌 다른 객체를 this로 지정하고 싶다면 call, apply, bind를 사용한다.
function myMethod4(params) {
  console.log("myMethod4 this ===>", this);
}

const myObject4 = {
  name: "IcedAmericano4",
};
myMethod4(); // window

// bind를 사용하면 this를 명시적으로 지정할 수 있다.
const newMethod4 = myMethod4.bind(myObject4); // myObject4
newMethod4();

// 한번 bind된 함수는 다시 bind할 수 없다.
const newMethod4Bind = newMethod4.bind(myObject); // myObject4
newMethod4Bind();

const newMethod5 = newMethod4.bind(myObject2); // myObject4
newMethod5();

const newMethod6 = newMethod4.bind(myObject3); // myObject4
newMethod6();

const myObject5 = {
  name: "IcedAmericano5",
  newMethod4,
};
// 한번 bind된 함수를 다른 객체에 할당해도 this는 바뀌지 않는다.
myObject5.newMethod4(); // myObject4

// 객체 내에서 선언한 메서드에서도 bind를 사용할 수 있다.
// 아래와 같이 myMethod5에 bind를 사용하면 this는 myObject5를 가리킨다.
const myObject6 = {
  name: "IcedAmericano6",
  myMethod5: function () {
    console.log("myMethod5 this ===>", this);
  }.bind(myObject5),
};
myObject6.myMethod5(); // myObject5

// ----------------------------------------------

// case 4. 이벤트 리스너에서의 this

// 이벤트 리스너에서의 this는 이벤트 리스너를 호출한 객체를 가리킨다.
// 이벤트 리스너를 호출한 객체는 이벤트 리스너를 호출한 DOM 요소이다.
// 따라서 아래 예시에서는 this는 클릭된 버튼을 가리킨다.
document.getElementById("myButton").addEventListener("click", function () {
  console.log("click event normal function", this); // 클릭된 버튼을 출력
});

// 화살표 함수에서의 this는 이벤트 리스너를 호출한 객체를 가리킨다.
// 이벤트 리스너를 호출한 객체는 이벤트 리스너를 호출한 DOM 요소이다.
// 따라서 아래 예시에서는 this는 클릭된 버튼을 가리킨다.
document.getElementById("myButton").addEventListener("click", () => {
  console.log("click event arrow function", this); // 클릭된 버튼을 출력
});

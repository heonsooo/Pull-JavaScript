//this란 무엇인가?
//this는 함수 내에서 함수 호출 맥락(context)를 의미한다.
//this는 함수를 호출할 때, 그 함수를 호출한 주체에 따라서 동적으로 결정된다.
//this는 어떻게 함수가 호출되었는지에 따라 달라진다.
//함수를 호출할 때, . 앞에 있는 것이 this가 된다.
//this는 함수를 호출할 때 결정된다.
//this는 함수를 호출할 때마다 달라질 수 있다.
//this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 결정된다.
//this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 달라진다.
//this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 동적으로 결정된다.
//this는 함수를 호출할 때, 함수를 호출한 객체에 따라서 동적으로 바인딩된다.
// this 예시

console.log(" this ===>", this);

function foo(argMsg) {
  console.log(`${argMsg} foo() ===> `, this);
}
foo(); // window

const obj = {
  name: `obj`,
  foo,
};
const obj2 = {
  name: `obj2`,
};
const obj3 = {
  name: `obj3`,
};
const obj4 = {
  name: `obj4`,
};
obj.foo("this is obj"); // obj

const bar = obj.foo;
bar("this is bar "); // window

foo.call(obj2, "this is call"); // obj ==> foo함수의 this를 명시적으로 obj2로 지정
foo.apply(obj3, ["this is apply"]); // obj ===> foo함수의 this를 명시적으로 obj3로 지정

const bindFoo = foo.bind(obj4);
bindFoo("this is bind"); // obj ===> foo함수의 this를 명시적으로 obj4로 지정

// ## C3 화살표 함수에서의 this
// 화살표 함수에서의 this는 함수를 선언할 때 결정된다.
const heyFn = {
  list: [1, 2, 3],
  getList() {
    setTimeout(function () {
      console.log("heyFn this ===>", this);
      console.log("heyFn this.list ===>", this);
    }, 2000);
  },
};

const heyArrow = {
  list: [1, 2, 3],
  getList() {
    setTimeout(() => {
      console.log("heyArrow this ===>", this);
      console.log("heyArrow this.list ===>", this.list);
    }, 2000);
  },
};

heyFn.getList(); // [1, 2, 3]
heyArrow.getList(); // [1, 2, 3]
// 화살표 함수에서의 this는 함수를 선언할 때 결정된다. => 어휘적 바인딩(lexical binding) => 스코프 체인(scope chain) => this 결정
// 화살표 함수에서의 this는 스코프 체인(scope chain)에 의해 결정된다.
// 어휘적 바인딩(lexical binding)에 의해 결정된다.

// 디버거로 알아보자
const debugThis = {
  a: () => {
    debugger;
    console.log("debugThis Of Arrow this ===>", this);
  },
  b: function () {
    debugger;
    console.log("debugThis Of Function this ===>", this);
  },
};

debugThis.a(); // window
debugThis.b(); // debugThis
// ## C4 생성자 함수에서의 this
// 생성자 함수에서의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
function Person(name) {
  this.name = name;
  console.log("this ===>", this);
}
const me = new Person("me"); // Person { name: 'me' }
console.log("me ===>", me);

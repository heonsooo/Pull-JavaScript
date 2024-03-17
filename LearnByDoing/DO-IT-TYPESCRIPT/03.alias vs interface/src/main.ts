interface Person {
  name: string;
  age: number;
}

type People = {
  name: string;
  age: number;
};

const me: Person = {
  name: "Foo",
  age: 26,
};

const you: People = {
  name: "Soo",
  age: 29,
};

// interface 확장

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const wildAnimal: Bear = {
//   name: "Foo",
//   honey: true,
// };

// // type 확장
// type Animal = {
//   name: string;
// };

// type Lion = Animal & {
//   fang: boolean;
// };

// const wildAnimal: Lion = {
//   name: "Simba",
//   fang: true,
// };

// interface Animal {
//   name: string;
// }

// interface Animal {
//   honey: boolean;
// }
// interface Animal {
//   weight: number;
// }

// const wildAnimal: Animal = {
//   name: "Foo",
//   honey: true,
//   weight: 250,
// };

// const miniAnimal: Animal = {
//   name: "Bar",
//   // honey: false,
//   weight: 50,
// };

// interface Animal {
//   name: string;
// }

// interface Bear {
//   honey: boolean;
// }

// type NewAnimal = Animal | Bear;
// const wildAnimal: NewAnimal = {
//   name: "Foo",
//   // honey: true,
// };

// type NewAnimal2 = Animal & Bear;
// const wildAnimal2: NewAnimal2 = {
//   name: "Foo",
//   honey: true,
// };

type Animal = {
  name: string;
};

type Bear = {
  honey: boolean;
};

type NewAnimal = Animal | Bear;
const wildAnimal: NewAnimal = {
  name: "Foo",
  // honey: true,
};

type NewAnimal2 = Animal & Bear;
const wildAnimal2: NewAnimal2 = {
  name: "Foo",
  honey: true,
};

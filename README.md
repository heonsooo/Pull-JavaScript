# Pull-JavaScript
자바스크립트를 잡아보자
---

# Index

## JavaScript 특징


#### 함수
- 함수 작성 시, 가급적 단일 책임 원칙(Single Responsibility Principle : SRP) 지키기. 
  - 왜냐하면, 함수에 여러가지 기능이 들어가면 들어갈 수록, 재사용하기가 어려워지기 때문이다.
  - 함수형 프로그래밍-> 클로져 개념 이해 필요.





#### 일급함수 
- 함수를 다른 변수와 동일하게 다루는 언어는 일급 함수를 가졌다고 표현한다. 
  - 예를 들어, 일급 함수를 가진 언어에서는 함수를 다른 함수에 인수로 제공하거나, 함수가 함수를 반환할 수 있으며, 변수에도 할당할 수 있습니다. 
    - (- 출처 : MDN)

#### 클로져
- 클로져는 함수의 실행이 끝난 뒤에도 함수에 선언된 변수의 값을 접근할 수 있는 자바스크립트의 성질
  - (- 출처 : 캡틴판교)
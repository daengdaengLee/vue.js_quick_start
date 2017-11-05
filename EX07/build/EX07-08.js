'use strict';

function Person(name, yearCount) {
    var _this = this;

    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        _this.age += 1;
    };
    for (var i = 1; i <= yearCount; i += 1) {
        incrAge();
    }
}
var p1 = new Person('홍길동', 20);
// -- this.age는 20이 출력됨.
console.log(p1.name + '님의 나이 : ' + p1.age);
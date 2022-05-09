// js 原型链
// js 基于对象设计和开发出来的语言 三个特点：封装，继承，多态
// “基于对象”是使用对象，但是无法利用现有的对象模版去产生新的对象类型，
//  继而去产生一个新的对象，即“基于对象”舞继承的特点。但是面相对系那个实现了继承和多态

//oop面向对象的支持的两种继承方式：接口继承， 实现继承

// ECMAscript 是无法去实现接口及沉的，js只支持实现继承。实现继承主要依靠原型链去实现

// prototype 和 proto
// 1.所有的引用类型（数组函数对象）可以自由的扩展属性（null 除开）
// 2.所有的引用类型都有一个 _prototype_  属性（隐式原型，即一个普通对象）
// 3.所有的函数都有一个 prototype 属性（显式原型，也是一个普通对象）
// 4.所有的引用类型，她的 --proto--指向它的构造函数的prototype属性
// 5.当试图得到一个对象的属性时，如果这个对象的本身不存在这个属性，那么就会去它的--proto--属性中去寻找（构造函数的prototype属性）
//   当调用这个对象本身并不存在的属性或事方法时，会逐层往上找，直到null 为止，null表示空对象
function Dosome(a, b) {
  this.a = a;
  this.b = b;
  this.sing = function () {
    console.log("xxxxxx");
  };
}

Object.prototype.not = function () {
  console.log("do not want do");
};

var jessy = new Dosome("篮球", "羽毛球");

jessy.not();

function Say() {}
// 原型链机制：利用原型让一个引用类型继承另一个引用类型的属性和方法
Say.prototype = new Dosome("街舞", "呼啦圈");
var say = new Say();
say.sing();

//1-number,string,boolean,null,undefined
console.log(123)
//浮点数
console.log(1.0)
console.log(1)
//科学计数法
console.log(1.2e3)
//负数
console.log(-67)
//not a Number,无法计算用它
console.log(NaN)
//无限大，超过范围用它
console.log(Infinity)
console.log(1 / 0)

//String
console.log(`
123
456
kkk`)

//boolean
console.log(true)
console.log(false)
console.log(true && false)
console.log(true || false)
console.log(!false)
console.log(2 > 3)
console.log(2 >= 3)
//建议用三个等号，两个等号会转换数据类型再比较
//两边值类型相同时，等同于===；不同的时候，要先进行类型转换，再比较
console.log("================================")
console.log("1" == 1);
console.log("1" == true);
console.log("================================")
console.log(7.0 == 7)
console.log(7.0 === 7)
//特例number NaN与所有其他值都不相等，包括它自己
console.log(NaN === NaN)
console.log(NaN == NaN)
//判断不是一个数字
console.log("================================isNaN")
console.log(isNaN(1))
console.log(isNaN(NaN))
//null 空，用的多undefined 未定义，判断函数参数是否传递

//数组
console.log([1, 2, 'a', 'aaa', [1, 2]])
var a = ['a', 2]
console.log(a[1])

//对象
var person = {
    name: 'tom',
    age: 20,
    tages: ['js', 'web', 'mobile']
}
console.log(person.tages[1])

//变量,var类型可以变，const不行，let作用域
var a$1 = 1
console.log(a$1)
const b = 2;
console.log(b)
//最好只用var声明一次
var a$1 = 'aaa'
console.log(a$1)
//字符串拼接
var name = "tina"
var age = 25
console.log(name + age)
//模板字符串 ${}
console.log(`你好，${name} is ${age}`)

//条件判断
if (age > 10) {
    console.log("hello")
} else {
    console.log("name")
}
//for
var m = [1, 2, 3]
for (let i = 0; i < m.length; i++) {
    console.log(i)
}
//while
console.log("================================while")
var n = 10
var x = 0;
while (n > 0) {
    n = n - 2
    x = 1
    console.log(x)
}

//函数
console.log("================================function")
function foo(a, ...b) {
    console.log(a, b)
}
//多余参数合成数组
foo(1, 2, 3)
foo()
function footwo(a, b) {
    console.log(a, b)
}
footwo(1, 2, 3)
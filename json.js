let obj = { name: "Prince", age: "15" , hobby: "football"};

let str=JSON.stringify(obj);
console.log(str);

let par=JSON.parse(str)
console.log(par);

let time=setInterval(() => {
    console.log("hi im prince")
}, 4000);

// clearInterval(() => {
// console.log()
// }, 10000)

setTimeout(() => {
clearInterval(time)
}, 12000)



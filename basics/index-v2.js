const https = require('https');
const file = require('fs');

console.log("start script");

file.readFileSync('./a.txt', "utf8");
console.log("execute after read file");

https.get('https://dummyjson.com/carts', (res) => {
    console.log("fetch API data");
});

setTimeout(() => {
    console.log('time out!');
}, 5000);

file.readFile('./a.txt', "utf8", (err, data)=>{
    console.log(data);
});

function multiplyFn(x, y){
    const result = x*y;
    return result;
}

console.log(multiplyFn(3, 8));
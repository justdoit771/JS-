//1 Задача
const data = [2,3,4,5];
let n = 1;
for (let x in data) {
  let *= data[x];
}

//2 
const cities = {Минск:"Беларусь", Москва:"Россия", Киев:"Украина"};
for (let x in cities) {
  console.write(x + '- это' +cities[x]);
}

//3 
let n = 1000;
num = 0;
while n>50{
n = n/2;
num += 1;
}

//4 
function fact(n){
if n == 0{
return 1;
}
else{
return fact(n-1)*n;
}
}

//5 
const massive = ['js', 'css', 'jq'];
console.write(massive[0]);

//6 
function fact(n){
return n**2;
}
}

//8 
const ints = [1,2,3,4,5,7];
let n = 0;
for (let x in ints) {
  n += ints[x];
}

//9
const ob = [a:'1',c:'3'];
console.write(ob['c']);
console.write(ob.c);
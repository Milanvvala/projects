const array = [20,50,6,0,44,0,89,885,6659,52,52,36,52]
console.log(array); console.warn(array[5]);
console.error(array[7], array[0], array[array.length - 1])
const obj = { name:"milan", "age":"25", password:"djfsk@$#" }
console.log(obj); console.log(obj.age)
const n1 = parseInt(obj.age) //changes string "25" to number 25
function add(){ return array[2] + n1; }
console.log(add())
const s1 = new String("milan"); const s2 = "tom"; const s3 = "  tom OP  "
console.log(s1); console.log(s2);console.log(`text ${s1}, text ${s2}`);
console.log(s1.toLocaleLowerCase(), s2.toLocaleUpperCase(), obj.name.length)
console.log(s3.trim(), s2.indexOf("o"), s1.charAt(2))
console.log(obj.name.slice(3));console.log(s3.split(" "))
console.log(obj.password.includes("#"));console.log(s3.replace("tom","milan"));
if(21===2){console.log("if");} else if(21>=22){console.log("else if");} else {console.log("else");}
obj.age == 25 ? console.log("true") : console.log("false"); ;
"25" === 25 && (undefined==null || "a"==="A") ? console.log("true") : console.log("false"); ;
const i = 3; switch(i){
   case 1:console.log("c1");break; case 2:console.log("c1");break;
   default : console.log("d") }
// -------------------------------------------
const arr = [20,50,6,0,44,0,89,885,6659,52,52,36,52]
// console.log(array[array.length-1])
// array[5] = "n"; array[array.length] = "n"; console.log(array);
// const a = [0,"a",1,null,undefined,true,"Last"];console.log(a);
// a.shift();console.log(a); a.unshift("x");console.log(a);
// a.pop();console.log(a); a.push("x");console.log(a);
// a.slice();console.error(a); 
// a.splice(0,2);console.log(a);
// array.includes("20");
// console.log(array.concat(a)); console.log(array.reverse())
// console.log(array.join("-"));
const ac = [];
ac[0] = array;ac[2]="a";ac[3]=Symbol("A");
// console.log(ac);console.log(ac[2][a.length-1]);

// let aoa = [ [0,1,2], ["a","A"], [true, undefined, null] ]
// let owo = { obj1: {i1: "v1", i2: "v2", i3: "v3",}, key_x: "value" }
// let awo = { obj1: [1,0,true,null,"n"], key_x: "value" }
// let owa = [ {i1: "v1", i2: "v2", i3: "v3",}, "value" ]
// console.log(aoa[0][2]);
// console.log(owo.obj1, owo["obj1"], owo["obj1"].i1, owo["obj1"]["i2"]);
// console.log(awo.obj1, awo["obj1"], awo["obj1"][0]);
// console.log(owa[0], owa[0]["i2"], owa[0].i1);
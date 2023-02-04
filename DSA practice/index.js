// const data = [2,56,544,8,0,49,44,36,155,4]
// const arr0 = [ 1, false, undefined, null, "Last"]
/*
for (let i = 0; i < arr0.length; i++) {
const el = arr0[i];document.write(i +" = " + el + ", ")
}// let n = 1; document.write(`<br> ${arr0[n]}`)
function getE1(){ let el1 = document.getElementById("e1").value
    if (el1<arr0.length && typeof parseInt(el1)==="number") 
    {alert(arr0[el1])}else{alert("unvalid")} } 
function inEl(){
//const v = 15; const p=5;
let elv = document.getElementById("ev").value
let elp = document.getElementById("ep").value
// for (let i = data.length-1; i>=elp ; i--) {
//data[i+1] = data[i];if (i == elp) {data[i]=elv}}console.log(data)
// if (elp<data.length && elp==="" && typeof parseInt(elp)==="number") 
// {alert(data[elp])}else{alert("unvalid")}
// data.splice(elp,0,elv);console.log(data)
}
function rmEl(){const p=5;
let elp = document.getElementById("erp").value
let n = parseInt(elp);
for (let i=n;i<data.length-1; i++) {data[i]=data[i+1]}
data.length = data.length-1;console.log(data, data.length)
}
function sLi(){const v=44;let n = null;
    let val = document.getElementById("sl").value
    for (let i=0;i<data.length; i++) {
    if (data[i]==val) {n = i;break}}console.log(n)
    console.log(data, data.indexOf(v))}
function mAr(){
    let m = [];
for (let i = 0; i < data.length; i++) {m[i] = data[i];}
for (let j = 0; j < arr0.length; j++) {m[m.length] =arr0[j]}
console.log(m)
let md = [...data,...arr0];console.log(md)
}mAr()
let a = [1,4,5,6,7];let i =0;const m = [];
let b = [2,3,8,9];let j =0;let k =0;
while (i<a.length && j<b.length) {
if (a[i]<b[j]) {m[k]=a[i];i++}
else{m[k]=b[j];j++} k++;}
while (j<b.length) {
m[k]=b[j];j++;k++;}console.log(m)
const arr = [2,544,0,36,155,4]
function shortArr(){
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
if (arr[j]>arr[j+1]) 
{let t = arr[j];arr[j]=arr[j+1];arr[j+1]=t}
}}}shortArr();console.log(arr)
function fun (x){ console.log(x);
if (x<10) {fun(x+1)}}fun(5)
function fact (x){ console.log(x);
if (x==0) {return 1}
return fact(x-1)*x
}console.log(fact(5));
// let m = 100; let p = 50;let a = 0;
function buyA(x){
if (x>0) {console.log(a,x);buyM(x)}
else(console.log("no Money",a))}
function buyM(x){a++;buyA(x-p)}
buyA(m)
function f1(){console.log("f1");}
function f2(){console.log("f2");f1()}
function f3(){console.log("f3");f2()}
function f4(){console.log("f4");f3()}f4()
let arr = [1,2,3,4,5,6,7,8];let t;
function rev(x,s,e){
if (s<=e) {t = x[s];x[s]=x[e];x[e]=t
console.log(x);rev(x,s+1,e-1)}}rev(arr,0,arr.length-1)
console.log(arr.reverse())
let b=[];let l = b.length;let m = 10;let c = [1,2,3]
// c.pop();c.push("x");console.log(c)
function push(x,e){
x=b;e = document.getElementById("pp").value;
if (x.length>=m) {alert("stake is full"+ e)}
x[x.length] = e;
document.getElementById("pp").value =""
console.log("added",e)
// x.length +=1;console.log(x)
}// push(b,0);push(b,1);console.log(b)
// function push(x,e){x[x.length] = e}push(c,20);console.log(c)
function pop(x){x=b;
if (x.length>0) {x.length -= 1;console.log("removed",x[x.length-1])}
else{alert("earry is empty")}}// pop(c);console.log(c)
function show(){
for (let i = 0; i < b.length; i++) 
{console.log(b[i]) }console.log(b)}
let d=[];let size=d.length;let str="STRING";let l = ""
str=str.split("");console.log(str)
function push(e){d[size]=e;size+=1;}
function pop(){l=d[size-1];size-=1;d.length=size;
return l}
// push(0);push(1);pop();console.log(d);
function revStr(s){// console.log(s);
for (let i = 0; i < s.length; i++) {push(s[i]);console.log(d)}
for (let i = 0; i < s.length; i++) {s[i]=pop()}
}revStr(str);console.log(str.join(""))
//   => CLASS

class Stack{ a=[]; size; max;
constructor(s){console.log("work")
this.max = s;this.size=this.a.length;}
push(j){
if (this.size>this.nax) {console.log("stack is full");}
else{this.a[this.size]=j;this.size++}}
pop(){
if (this.size>0) {this.size--;this.a.length=this.size} 
else {console.log("empty")}}
show(){console.log(this.a);}
}
st1= new Stack(2);
st1.push(0);st1.show()

// => queue
// let q=[];let l= q.length;let max = 2;
function show(){console.log(q)}
function enq(){
let x = document.getElementById("que").value;
if (l>=max) {console.log("queue is full");} 
else {q[l]=x; l++;} } 
function deq(){ 
    let x = document.getElementById("que").value;
     if (l>0) {
for (let i = 0; i<q.length; i++) {q[i]=q[i+1]}l--;q.length=l
} else {console.log("empty");}} 
// enq(0);show();deq()
function front(){
if (l>0) { console.log(q[0])} else {console.log("empty");}
}
function rear(){
if (!emp()) { console.log(q[l-1])} else {console.log("empty");}
}
function emp(){
    if (l<=0) {return true} else {return false}
}show()

//circular
class Queue {
constructor(size) { this.m = size;this.i = new Array(size);
this.rear = -1;this.front = -1;this.s = 0;}
enq(v) {
if (this.s != this.m) {
    if (this.rear === this.m - 1) {
          this.rear = 0} else { this.rear++}
    this.i[this.rear] = v;this.s++
    if (this.front == -1) {this.front = this.rear}
      } }
deq() {
if (this.s!=0) {this.i[this.front]=null
    if(this.front==this.max-1) {this.front=0;
    } else {this.front++} this.s--;}
else {this.front = -1 ;this.rear = -1;
    console.log("queue is empty")} }
}let q = new Queue(3)

let da= [0,65,536,4,9]
let find= 536;let p = "";
function se(){
let x = document.getElementById("ser").value;
for(let i=0;i<=da.length;i++){
if(da[i]==x){p=i;break;}}console.log(p); }
let ar=[0,1,2,3,5];let po="";let find=5;
let start=0;let end=ar.length-1
//iterative approch
while (start<=end) {let mid = Math.floor((start+end)/2)
if (ar[mid]===find) {po = mid;console.log("mid");break;}
else if(ar[mid]<find){start = mid+1;console.log("grater");}
else{end = mid-1;console.log("less");}
}console.log(po)
//Recursive approch
function co(x){console.log(x)}
function rsu(x,s,e){let mid = Math.floor((s+e)/2)
if (x[mid]===find) {po = mid;co("mid");}
else if(x[mid]<find){s = mid+1;rsu(x,s,e);co("grater");}
else{e = mid-1;rsu(x,s,e);co("less");}
}rsu(ar,start,end);co(po)

//selection shorting
let y = [5,65,32,5653,168,0]
function co(x){console.log(x)}
function sSHORT(x){ let minId ;
for (let i = 0; i < x.length; i++) { minId=i;
    for (let j=i+1; j < x.length; j++) {
        if (x[j]<x[minId]) { minId = j;
            }}
let temp = x[minId];x[minId] =  x[i];x[i] = temp;
}}sSHORT(y);co(y) 

// Insersion short
function co(x){console.trace(x)}
let info = [12,11,13,5,6];
function ins(array){let temp,current,i,j;
for (i = 1; i < array.length; i++) {
current = array[i]; j=i-1;
    while (j>=0 && array[j]>current) {
    array[j+1]=array[j]; j--;}array[j+1]=current;
} }ins(info);// co(`${info} End`);
var p1 = new Error().lineNumber;var p2 = new Error().stack 
console.log(p1);console.log(p2)

function co(x){console.log(x)}
function chAna(s1,s2){ let objS1={};co(objS1);
if (s1.length!==s2.length) {return false;}
for (ch of s1) {
    co(ch);objS1[ch]= (objS1[ch] || 0) +1
}co(objS1)
for (ch of s2) {
    if(!objS1[ch]){return false;}
    if (objS1[ch]) {objS1[ch]--}
    }co(objS1);return true;
}
co(chAna("oellodaa","oeldloaa"));co("End")
function co(x){console.log(x)};
function pld(str){let s =0;let e =str.length-1;
    while (e>s) {
        if (str[s]!=str[e]) {return false;}
        s++;e--; } return true;
}co(pld("21level12"));*/

let skv={};let str="this is stringlllll";let m= "";
for (let i = 0; i < str.length; i++) {
    let key = str[i]
    if(!skv[key]){skv[key]= 0;}
    skv[key]++;
    if(m == ""||skv[key]>skv[m]){m = key;}  
}
console.log(skv)
console.log(m);
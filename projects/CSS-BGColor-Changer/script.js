var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var css = document.querySelector("h3");
var body = document.getElementById("bid");
c1.addEventListener("input",colorS);
c2.addEventListener("input",colorS);

function colorS(){
	body.style.background=
	"linear-gradient(to right," + c1.value + ", " + c2.value + ")";
	css.textContent = body.style.background+";";
}
// var button = document.getElementsByTagName("button")[0];
// function print(){ console.log("working");}
// button.addEventListener("click",function(){ console.log("working");})

// var button = document.getElementById("enter");
// var input = document.getElementById("uin");
// var ul = document.querySelector("ul");

// function inpLn(){
	// return input.value.length;
// }

// function creatElm(){ 
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(input.value));
		// ul.appendChild(li);
		// input.value="";
// }


// function addEleC(){
	// if(inpLn()>0){
		// console.log("working");
		// creatElm();
	// }
// }

// function addEleK(){
	// if(inpLn()>0 && event.keyCode === 13){
		// console.log("working");
		// creatElm();
	// }
// }

 
// button.addEventListener("click",addEleC);
// input.addEventListener("keypress",addEleK);
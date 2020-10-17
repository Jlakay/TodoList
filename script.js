var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var sel = document.getElementById("select");
var ul1 = document.getElementById("p1");
var ul2 = document.getElementById("p2");
var ul3 = document.getElementById("p3");


function inputLength() {
	return input.value.length;
}

function choose() {
	prompt(sel.options[sel.selectedIndex].text)
}

function createListElement1() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul1.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
 	btn.appendChild(document.createTextNode("Finished!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function createListElement2() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul2.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
 	btn.appendChild(document.createTextNode("Finished!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function createListElement3() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul3.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
 	btn.appendChild(document.createTextNode("Finished!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0 && sel.value === "priority1") {
		createListElement1();
	} if (inputLength() > 0 && sel.value === "priority2") {
		createListElement2();
	} if (inputLength() > 0 && sel.value === "priority3") {
		createListElement3();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 && sel.value === "priority1") {
		createListElement1();
	} if (inputLength() > 0 && event.keyCode === 13 && sel.value === "priority2") {
		createListElement2();
	} if (inputLength() > 0 && event.keyCode === 13 && sel.value === "priority3") {
		createListElement3();
	}

}

function removeParent(evt){
	evt.target.parentNode.remove();
} 


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
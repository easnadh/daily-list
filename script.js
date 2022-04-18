
let arr = [{
	id: "0",
	text: "покормить кота",
	isDone: false
}];

function addElem(event) {
	event.preventDefault();
	const label = document.getElementById("label");
	const id = String(arr.length);
	arr.push({
		id,
		text: label.value,
		isDone: false
	});
	console.log(arr);
	render();
	rewriting();
	label.value = "";
}

function delElem(id) {
	arr = arr.filter(item => item.id !== id);
	rewriting();
	console.log(arr);
	render();
}

function doneElem(id) {
	arr[id].isDone = !arr[id].isDone;
	console.log(arr);
	// const x = document.getElementsByClassName('elements');
	// if (arr[id].isDone === true) { x.style.display = 'block'; }
	// else { x.style.display = 'none'; }
	
	render();
	rewriting();
}

function render() {
	const ol = document.getElementById("list");
	ol.innerHTML = "";

	if (arr.length === 0) {
		ol.innerHTML = "в планах чилл";
		return;
	}

	for (let item of arr) {
		let li = document.createElement("li");
		li.innerHTML = `<button onclick="doneElem('${item.id}')">&#10004;</button>
		<span class="elements">${item.text}</span>
		<button onclick="delElem('${item.id}')">&#10006;</button>`;
		ol.appendChild(li);
	}
}


function rewriting() {
	localStorage.setItem('to-do-list', JSON.stringify(arr));
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("form").addEventListener("submit", addElem);
	
	if (localStorage.getItem("to-do-list")) {
		arr = JSON.parse(localStorage.getItem("to-do-list"));
	}
	console.log(arr);
	render();
});
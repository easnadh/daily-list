
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
		if(item.isDone) { li.classList.add("checked") }
		li.innerHTML = `<button onclick="doneElem('${item.id}')">&#10004;</button>
		<span>${item.text}</span>
		<button onclick="delElem('${item.id}')">&#10006;</button>`;
		ol.appendChild(li);
	}
}


function rewriting() {
	localStorage.setItem('to-do-list', JSON.stringify(arr));
}


function filter(id) {

	// const active = arr.filter(item => item.isDone === false);
	// console.log(active);

	const active = [];
	for (let i = 0; i < arr.length; i++) {
		if(arr[id].isDone === false) {
			active.push(arr[id]);
		}
	}
	render();
	console.log(active);

	// const btns = document.querySelectorAll(".btnf");

	// document.querySelector("div").addEventListener('click', (event) => {
	// if (event.target.tagName !== 'li') return false;

	// let filterClass = event.target.dataset['f'];
	// console.log(filterClass);
	// });

	// for (const item of arr) {

	// }
}


document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("form").addEventListener("submit", addElem);
	
	if (localStorage.getItem("to-do-list")) {
		arr = JSON.parse(localStorage.getItem("to-do-list"));
	}
	console.log(arr);
	render();

	//document.getElementById("active").addEventListener("submit", filter);
});
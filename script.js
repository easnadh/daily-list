
let arr = [{
	id: 0,
	text: "покормить кота",
	isDone: false
}];

function addElem(event) {
	event.preventDefault();
	const label = document.getElementById("label");
	const id = arr.length;
	arr.push({
		id,
		text: label.value,
		isDone: false
	});
	console.log(arr);
	render();
	localStorage.setItem('to-do-list', JSON.stringify(arr));
	label.value = "";
}

function delElem(id) {
	// const innerEvent = ev || event;
	// innerEvent.target.parentElement.remove();
	arr = arr.filter(item => item.id !== id);
	//localStorage.removeItem(id);

	console.log(arr);
	console.log("ouuu");
	render();
}

function doneElem(id) {
	for (let item of arr) {
		if (arr.id === id && arr.isDone === false) {
			arr.isDone = true;
			console.log("было false, стало true");
		}
		else if (arr.id === id && arr.isDone === true) {
			arr.isDone = false;
			console.log("было true, стало false");
		}
	}
	return arr.isDone;
}

function render() {
	const ol = document.getElementById("list");
	ol.innerHTML = "";
	for (let item of arr) {
		let li = document.createElement("li");
		li.innerHTML = `<input type="checkbox">
		<button onclick="doneElem('${item.id}')">V</button>
		<span>${item.text}</span>
		<button onclick="delElem('${item.id}')">x</button>`;
		// li.setAttribute("id", "element" + item.id);
		ol.appendChild(li);
	}
}

// function checkboxCheck() {
// 	let checkbox = document.querySelectorAll("input[type=checkbox]");

// 	for (let i = 0; i < checkbox.length; i++) {
// 		checkbox[i].onchange = function () {
// 			arr = JSON.parse(localStorage.getItem("to-do-list"));
// 			arr[i].check = this.checked;
// 			localStorage.setItem("to-do-list", JSON.stringify(arr));
// 		}
// 	}
// }



document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("form").addEventListener("submit", addElem);
	
	if (localStorage.getItem("to-do-list") !== undefined) {
		arr = JSON.parse(localStorage.getItem("to-do-list"));
	}
	console.log(arr);
	render();
});
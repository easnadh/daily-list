
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

function delElem(ev) {
	// const innerEvent = ev || event;
	// innerEvent.target.parentElement.remove();
	render();
}

function render() {
	const ol = document.getElementById("list");
	ol.innerHTML = "";
	for(let item of arr) {

		let li = document.createElement("li");
		li.innerHTML = `<input type="checkbox" onclick="checkboxCheck"><span>${item.text}</span>
		<button onclick="delElem()">x</button>`;
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

	if (localStorage.getItem("to-do-list") != undefined) {
		arr = JSON.parse(localStorage.getItem("to-do-list"));
	}

	render();
	
});


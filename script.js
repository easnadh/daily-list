

function addElem(event) {
	event.preventDefault();

	const lb = document.getElementById("label");
	const ol = document.getElementById("list");
	let children = ol.children.length + 1;
	const li = document.createElement("li");
	li.innerHTML = `<input type=\"checkbox\" class="list-element">
	<span>${lb.value}</span>
	<button onclick="delElem()">x</button>`;
	li.setAttribute("id", "element" + children);
	ol.appendChild(li);
	lb.value = "";
}

function delElem(ev) {
	const innerEvent = ev || event;
	innerEvent.target.parentElement.remove();
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("form").addEventListener("submit", addElem);
});



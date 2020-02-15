var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListItem() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDeleteButton());
	li.addEventListener("click", crossOffItem);
	ul.appendChild(li);
	input.value = "";
}
function createDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete item"));
	deleteButton.classList.add("deleteitem");
	deleteButton.addEventListener("click", removeItemAfterClick);
	return deleteButton;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListItem();
	}
}

function addListAfterKeypress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem();
	}
}

function crossOffItem() {
	 event.currentTarget.classList.toggle("done"); 
}

function removeItemAfterClick() {
	var itemToBeRemoved = event.currentTarget.parentNode;
	itemToBeRemoved.parentNode.removeChild(itemToBeRemoved);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Loop that adds a linethrough on the item if clicked
for ( i=0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", crossOffItem);
    
}

//loop that adds a delete button next to every item already on the list
for ( j=0; j < listItems.length; j++) {
    listItems[j].appendChild(createDeleteButton());
}

//loop that adds an event function every time the delete button is pressed
for (k = 0; k <listItems.length; k++) {
   var listButtons = document.getElementsByClassName("deleteitem");
   listButtons[k].addEventListener("click", removeItemAfterClick)
}
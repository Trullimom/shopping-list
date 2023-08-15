var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function addListItem() {
  var li = document.createElement("li");
  let span = document.createElement("span");
  span.appendChild(document.createTextNode(input.value));
  li.appendChild(span);
  ul.appendChild(li);
  input.value = "";
  span.addEventListener("click", toggleItem);

  var btnNextItem = document.createElement("button");
  btnNextItem.appendChild(document.createTextNode("Delete"));
  li.appendChild(btnNextItem);
  // this works too --> btnNextItem.onclick = deleteItem;
  btnNextItem.addEventListener("click", deleteItem);
}

function toggleItem(event) {
  event.currentTarget.classList.toggle("done");
}

function deleteItem(event) {
  event.target.parentNode.remove();
}

function addAfterClick() {
  if (inputLength() > 0) {
    addListItem();
  }
}

function addAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    addListItem();
  }
}

enterButton.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress);

//to toggle classname .done whithin already existing items
var listClick = document.querySelectorAll("span");
for (i = 0; i < listClick.length; i++) {
  listClick[i].onclick = toggleItem;
  // this works too! --> listClick[i].addEventListener("click", toggleItem);
}

//to remove already existing items when deletebutton clicked
var deleteBtn = document.getElementsByClassName("deletebtn");
for (i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].onclick = deleteItem;
  // this works too!! --> deleteBtn[i].addEventListener("click", deleteItem);
}

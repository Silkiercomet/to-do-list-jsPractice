let list = document.querySelector(".lista");
let btn = document.querySelector(".btn")
const deleteElement = () => {
    list.removeChild(item);
}
const addElement = () => {
    let input = document.querySelector("#in").value;
    let item = document.createElement("li");
    let node = document.createTextNode(input);
    let item2 = document.createElement("button");
    item.appendChild(node);
    list.appendChild(item);
    list.appendChild(item2);
    document.querySelector("#in").value = ""
    item2.addEventListener("click", deleteElement)
}


btn.addEventListener("click", addElement)
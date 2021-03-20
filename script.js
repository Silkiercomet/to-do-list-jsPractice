let list = document.querySelector(".lista");
let btn = document.querySelector(".btn")

const addElement = () => {
    let input = document.querySelector("#in").value;
    let item = document.createElement("li");
    let node = document.createTextNode(input);
    let item2 = document.createElement("button");

    const deleteElement = () => {
        list.removeChild(item);
        list.removeChild(item2);
    }
    if(input.length > 0){
    item.appendChild(node);
    list.appendChild(item);
    item.appendChild(item2);
    document.querySelector("#in").value = ""
    item2.textContent = "delete"
    item2.style.marginLeft = ".5rem"
    }
    item2.addEventListener("click", deleteElement)
}


btn.addEventListener("click", addElement)

// let menu = document.querySelector("#menu");

// function createMenu(x){
//     let li = document.createElement('li');
//     li.textContent = x;
//     return li;
// }

// menu.appendChild(createMenu("Home"));
// menu.appendChild(createMenu("About"));
// menu.appendChild(createMenu("Products"));
// menu.appendChild(createMenu("Contact"));

let menu = document.querySelector("#menu");

let arrowFun = (i) => {
    let li = document.createElement('li');
    li.textContent = i;
    return li;
}

menu.appendChild(arrowFun("Home"));
menu.appendChild(arrowFun("About"));
menu.appendChild(arrowFun("Info"));
menu.appendChild(arrowFun("Contact"));

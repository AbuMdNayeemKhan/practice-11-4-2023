let div = document.createElement("div");
let ul = document.createElement("ul");
ul.className = ("ulClass");
div.appendChild(ul);


let li = document.createElement("li");
let text = document.createTextNode("Home");
li.appendChild(text);
ul.appendChild(li);

let li2 = document.createElement("li");
let text2 = document.createTextNode("About");
li2.appendChild(text2);
ul.append(li2);

let li3 = document.createElement("li");
let text3 = document.createTextNode("Contact Us");
li3.appendChild(text3);
ul.appendChild(li3);

document.body.appendChild(div);

let script = document.createElement("script");

script.src = "nayeem.js";

document.body.appendChild(script);
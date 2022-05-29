
function append() {
console.log("yes");
    let get = JSON.parse(localStorage.getItem("Shubham")) || [];
    let container = document.createElement("container");
    container.innerHTML = null;

    get.forEach(function(el, index) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText = el.name;
        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function () {
            remove(index);
        });
        div.append(img, p, btn);
        container.append(div);
    });
}

function remove(index) {
    let get = JSON.parse(localStorage.getItem("Shubham")) || [];

    let newData = get.filter(function (el, i) {
        if(i === index) {
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash", JSON.stringify(trash));
        }else {
            return i !== index;
        }
    });

    localStorage.setItem("shubham", JSON.stringify(newData));
    append();
}


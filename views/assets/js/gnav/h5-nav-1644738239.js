/* -----------------------------------------------
/* Authors: QuiteAFancyEmerald and OlyB
/* MIT license: http://opensource.org/licenses/MIT
/* HTML5 gnav
/* ----------------------------------------------- */

var h5gms = [
];

var glist = document.getElementById("glist");

for (let item of h5gms) {
    let a = document.createElement("a");
    a.href = "#";
    var img = document.createElement("img");
    img.src = "/assets/img/h5g/" + item.img;
    a.appendChild(img);
    var title = document.createElement("h3");
    title.textContent = item.name;
    a.appendChild(title);
    var desc = document.createElement("p");
    desc.textContent = item.description;
    if (item.credits == "itch") desc.innerHTML += '<br>Credits: Game can be found <a target="_blank" href="https://itch.io">here</a>.';
    if (item.credits == "nowgg") desc.innerHTML += '<br>Credits: Game can be found <a target="_blank" href="https://now.gg">here</a>.';
    a.appendChild(desc);
    a.onclick = function(e) {
        if (e.target == a || e.target.tagName != "A") {
            e.preventDefault();
            item.custom ? goProx[item.custom](true) : goFrame("/archive/g/" + item.path, item.nolag);
        }
    }

    glist.appendChild(a);
}

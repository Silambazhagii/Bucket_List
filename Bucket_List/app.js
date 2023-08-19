var addbtn = document.querySelector(".btn");
var txt = document.querySelector(".txt");
var box = document.querySelector(".something")

var res = document.querySelector(".reset")

var arr = []


function remove(i) {
    arr.splice(i, 1);
    console.log(arr)
    display()
}

addbtn.onclick = function name() {
    console.log(txt.value);
    addtoarray()
}
function display() {
    box.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        box.innerHTML += `<div class="some">${arr[i]}<span class="tick"><img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" onclick="remove(${i})"></div></span></div>`
    }
}

function addtoarray() {
    arr.push(txt.value);
    display()
}

res.onclick = function reset() {
    arr = []
    display()
}

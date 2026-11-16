
function upDate(previewPic) {
    console.log("Mouse over or keyboard focus");

    console.log("Alternative text:", previewPic.alt);
}

function undo() {
    console.log("Mouse left or keyboard blur");
}

function addTabIndex() {
    console.log("Page loaded - adding tabindex");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

window.addEventListener("load", addTabIndex);

let images = document.querySelectorAll(".gallery img");

for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("mouseover", function() {
        upDate(this);
    });

    images[i].addEventListener("mouseleave", undo);

    images[i].addEventListener("focus", function() {
        upDate(this);
    });

    images[i].addEventListener("blur", undo);
}

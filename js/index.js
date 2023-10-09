let w1 = document.querySelector(".w1")
let w2 = document.querySelector(".w2")
let w3 = document.querySelector(".w3")
let go_to_img1 = document.querySelector(".go_to_img1")
let go_to_img2 = document.querySelector(".go_to_img2")
let go_to_img3 = document.querySelector(".go_to_img3")

go_to_img1.addEventListener("click", () => {
    if (go_to_img2.classList[2] == "utility") {
        go_to_img2.classList.remove("utility");
    }
    if (go_to_img3.classList[2] == "utility") {
        go_to_img3.classList.remove("utility");
    }
    go_to_img1.classList.add("utility");
    w1.style.display = "block";
    w2.style.display = "none";
    w3.style.display = "none";
});
go_to_img2.addEventListener("click", () => {
    if (go_to_img1.classList[2] == "utility") {
        go_to_img1.classList.remove("utility");
    }
    if (go_to_img3.classList[2] == "utility") {
        go_to_img3.classList.remove("utility");
    }
    go_to_img2.classList.add("utility");
    w1.style.display = "none";
    w2.style.display = "block";
    w3.style.display = "none";
});
go_to_img3.addEventListener("click", () => {
    if (go_to_img1.classList[2] == "utility") {
        go_to_img1.classList.remove("utility");
    }
    if (go_to_img2.classList[2] == "utility") {
        go_to_img2.classList.remove("utility");
    }
    go_to_img2.classList.remove("utility");
    go_to_img3.classList.add("utility");
    w1.style.display = "none";
    w2.style.display = "none";
    w3.style.display = "block";
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
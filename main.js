let ratingValues = document.querySelectorAll(".rating-value");
let btn = document.getElementById("btn");
let ratingStartPage = document.querySelector("#start-page");
let ratingEndPage = document.querySelector("#end-page");
let userRating = document.querySelector("#chosen-rating")
let ratingPicked = 0;


//EVENT LISTENERS

ratingValues.forEach(x => {

    x.addEventListener("mouseenter", function (x) {
        if (!x.target.classList.contains("active")) {
            x.target.classList.add("hover");
        }
    });
    x.addEventListener("mouseleave", function (x) {
        x.target.classList.remove("hover");
    });
    x.addEventListener("click", addActive);
})

btn.addEventListener("click", showRating)


//FUNCTION adds active class, removes hover class, assigns ratingPicked
function addActive(e) {
    ratingValues.forEach(x => x.classList.remove("active", "hover"));
    e.target.classList.add("active");
    ratingPicked = e.target.innerHTML;
    console.log(ratingPicked);
}

//function to show the final rating

function showRating(e) {
    if (ratingPicked > 0) {
        ratingEndPage.classList.remove("visible")
        ratingStartPage.classList.add("visible");
        userRating.innerHTML = ratingPicked;
    } else {
        window.alert("Please choose the rating before submitting.")
    }
}
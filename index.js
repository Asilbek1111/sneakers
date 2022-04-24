let firstPic = document.getElementById("first");
let pic = document.getElementById("pic");
let thirdPic = document.getElementById("third");
let fourthPic = document.getElementById("fourth");
let Img = document.querySelector(".col-img");
let Img2 = document.querySelector(".img2");
let Img3 = document.querySelector(".img3");
let Img4 = document.querySelector(".img4");
let Img5 = document.querySelector(".img5");
let firstText = document.querySelector(".first-text");
let secondText = document.querySelector(".second-text");
let thirdText = document.querySelector(".third-text");
let fourthText = document.querySelector(".fourth-text");
const card = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");

firstPic.addEventListener("click", function(e){
Img.style.display = "none";
Img2.style.display = "block"
Img3.style.display = "none";
Img4.style.display = "none";
Img5.style.display = "none";
firstText.style.display = "block";
secondText.style.display = "none";
thirdText.style.display = "none";
fourthText.style.display = "none";
card2.classList.remove("card-active");
    card.classList.add("card-active");
    card4.classList.remove("card-active");
    card3.classList.remove("card-active");

}
)

pic.addEventListener("click", function(e){
    Img.style.display = "none";
    Img2.style.display = "none"
    Img3.style.display = "block";
    Img4.style.display = "none";
    Img5.style.display = "none";
    firstText.style.display = "none";
    secondText.style.display = "block";
    thirdText.style.display = "none";
    fourthText.style.display = "none";
    card2.classList.add("card-active");
    card.classList.remove("card-active");
    card4.classList.remove("card-active");
    card3.classList.remove("card-active");
    }
    )

thirdPic.addEventListener("click", function(e){
        Img.style.display = "none";
        Img2.style.display = "none"
        Img3.style.display = "none";
        Img4.style.display = "block";
        Img5.style.display = "none";
        firstText.style.display = "none";
        secondText.style.display = "none";
        thirdText.style.display = "block";
        fourthText.style.display = "none";
        card3.classList.add("card-active");
        card.classList.remove("card-active")
        card2.classList.remove("card-active");
        card4.classList.remove("card-active");
        }
        )
fourthPic.addEventListener("click", function(e){
            Img.style.display = "none";
            Img2.style.display = "none"
            Img3.style.display = "none";
            Img4.style.display = "none";
            Img5.style.display = "block";
            firstText.style.display = "none";
            secondText.style.display = "none";
            thirdText.style.display = "none";
            fourthText.style.display = "block";
            card3.classList.remove("card-active");
            card.classList.remove("card-active")
            card2.classList.remove("card-active");
            card4.classList.add("card-active");
            }
            )

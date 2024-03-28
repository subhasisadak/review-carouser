let cId = 1;
let block = document.querySelector(".reviewCarousel");
let blockChildrens = block.childElementCount;
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

let nextReview = () => {
    cId += 1
    if(cId > blockChildrens){
        cId = 1;
    }
    else if(cId < 1){
        cId = blockChildrens;
    }
    for(let i = 1; i <= blockChildrens; i++){
        let id = "#c" + i; 
        let review = document.querySelector(id);
        review.style.display = 'none';
    }
    let review = document.querySelector("#c"+cId);
    review.style.display = 'block';
}

let prevReview = () => {
    cId -= 1
    if(cId > blockChildrens){
        cId = 1;
    }
    else if(cId < 1){
        cId = blockChildrens;
    }
    for(let i = 1; i <= blockChildrens; i++){
        let id = "#c" + i; 
        let review = document.querySelector(id);
        review.style.display = 'none';
    }
    let review = document.querySelector("#c"+cId);
    review.style.display = 'block';
}

nextButton.addEventListener("click", nextReview);
prevButton.addEventListener("click", prevReview);
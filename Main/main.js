const submissionButton =  document.querySelector(".sub_button");
const ratingButton = document.querySelector(".rating_btn");
const ratingButtons = document.querySelectorAll(".rating_btn button");
const main = document.querySelector(".main_container");
const appreciation_section = document.querySelector(".appreciation_section");
const ratingSection = document.querySelector(".rating_section");
let currentRatingNumber = 0;


ratingButton.addEventListener("click",({target})=>{
    if(target.tagName === "BUTTON"){
        setRatingBtnActive(target);
        currentRatingNumber = parseFloat(target.textContent);
    }
})

ratingSection.addEventListener("click",({target})=>{
    if(target.tagName ==="BUTTON" && target.textContent==="SUBMIT"){
        if(currentRatingNumber != 0){
            ratingSection.classList.toggle("hide_rating_section");
            appreciation_section.classList.add("show_appreciation_section");
            appreciation_section.querySelector(".rating_num").textContent = `You selected ${currentRatingNumber} out of 5`;
        }else {
            alert("Please enter a Rating Number");
        }
        resetRatingBtns();
    }
});

window.addEventListener("click",({target})=>{
    if(target.contains(appreciation_section)){
        if(appreciation_section.classList.contains("show_appreciation_section")){
        ratingSection.classList.remove("hide_rating_section");
        appreciation_section.classList.remove("show_appreciation_section");
        } 
    }
});

function setRatingBtnActive (target) {
  resetRatingBtns();
    target.classList.add("rating_btn_active");
}

function resetRatingBtns(){
    [...ratingButtons].forEach((button)=>{
        button.classList.remove("rating_btn_active");
      })
      currentRatingNumber = 0;
}

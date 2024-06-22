//Swiper

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Changing Colors for the boxes on mouse hover

let arrowBtns = document.querySelectorAll(".categories-container .box .bx");
let boxes = document.querySelectorAll(".box");

function colorChange()
{
  
 for(let i=0 ; i<5 ; i++)
  {

    //Code for changing color when cursor on boxes
      
     boxes[i].addEventListener("mouseover",(event)=>{
        boxes[i].style.backgroundColor="#fef4ea";
        arrowBtns[i].style.backgroundColor="#ff7e00";
        boxes[i].style.borderColor = "#ff7e00";
      });

    //Code for changing color when the cursor goes out of the box

    boxes[i].addEventListener("mouseout",(event)=>{
      boxes[i].style.backgroundColor="#fff";
      arrowBtns[i].style.backgroundColor="#3cb815";
      boxes[i].style.borderColor = "#3cb815";
    });
  }
}

colorChange();


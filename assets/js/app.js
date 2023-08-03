// change nav bgColor in scroll
const nav = document.querySelector("nav");
const arrowUp = document.querySelector(".arrow-up");

window.addEventListener("scroll",changeBg) 
 function changeBg(){
  let scrollY = window.scrollY;
  if(scrollY>190){
      nav.classList.add("color");
      nav.style.boxShadow = "0px 0px 20px 0px rgba(143,159,174,0.3)";
      arrowUp.style.opacity= "1";
    }else{
      nav.classList.remove("color");
      nav.style.boxShadow = "0px 0px 0px 0px rgba(143,159,174,0.3)";
      arrowUp.style.opacity= "0";

  }
 }

//  button scroll to top of window
arrowUp.addEventListener("click",()=>{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
})

// nav and tabs in about section
const tabs = document.querySelectorAll(".about__desc--tabs .tab");
const contents = document.querySelectorAll(".content");
const line = document.querySelector(".line");

tabs.forEach((tab, index) => {
   tab.addEventListener("click" ,(e)=>{
    
     contents.forEach(content => {
       content.classList.remove("active");
     });
     contents[index].classList.add("active");
     line.style.width = e.target.offsetWidth + "px";
     line.style.left = e.target.offsetLeft + "px";
   }) 
});



// logo img slider
// const logos = document.querySelectorAll(".logos img");
// const slider = document.querySelector(".logos .slider");

// setInterval(function () {
//   logos.forEach((logo, index) => {
//     logo.style.transform = "translateX(-5rem)";
//     if(index >= logos.length-1){
//       index=0
//     }
//   });
// }, 2000);

// nav and tabs in features section
const featuresTabs = document.querySelectorAll(".features__tabs .tab");
const featuresContents = document.querySelectorAll(".tab--content");

featuresTabs.forEach((tab, index) => {
  tab.addEventListener("click",()=>{
    featuresTabs.forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    featuresContents.forEach(content => {
      content.classList.remove("active");
    });

   featuresContents[index].classList.add("active");
  }
)})


//question accordion
const accordionItems = document.querySelectorAll(".question__accordion--item");
const accordionDescription = document.querySelectorAll(".accordion--collapse");
const arrows = document.querySelectorAll(".arrow");

accordionItems.forEach((item, index )=> {
  item.addEventListener("click", (e) =>{
      removeOpen();
      accordionDescription[index].classList.toggle("open");
      arrows[index].style.transform = "rotate(180deg)";      
    })
    });
  
function removeOpen (){
  accordionDescription.forEach(desc => {
    desc.classList.remove("open")
  });
}

// testimonial slider
const testimonialItems = document.querySelectorAll(".testimonial-item");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) =>{
     removeActive();
     removeDotColor();
     testimonialItems[index].classList.add("active");
     dot.classList.add("active");
  })
});

function removeActive(){
  testimonialItems.forEach(item => {
    item.classList.remove("active");
  });
}
function removeDotColor(){
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
}

//auto play slider in testimonial section
let counter = 0;
function nextSlide(){
  testimonialItems.forEach(item => {
    item.classList.remove("active");
  });

  if(counter >= testimonialItems.length - 1){
      counter = 0;
  }else{
    counter++;
  }
  testimonialItems[counter].classList.add("active");
}

setInterval(nextSlide , 6000);


// filter product in portfolio section
const filteredList = document.querySelectorAll(".portfolio__filters h6");
const portfolioItems = document.querySelectorAll(".portfolio__items .item");

filteredList.forEach(list => {
  list.addEventListener("click", removeActiveClass);
  list.addEventListener("click", showImgs);
});


function removeActiveClass(){
  filteredList.forEach(list => {
    list.classList.remove("active");
    this.classList.add("active");
  });
}

function showImgs(){  
  portfolioItems.forEach(item => {
    item.style.display = "none";
  });

  const imgs = document.querySelectorAll(this.dataset.show);
  imgs.forEach(img => {
    img.style.display="block";
  });

}

function fiterSearch(){
  const searchItem = document.querySelector(".search input");
  searchItem.addEventListener("keyup", function(e){
    const itemValue = e.target.value.toLowerCase().trim();
    const portfolioItems = document.querySelectorAll(".portfolio__items .item");

      portfolioItems.forEach(item=>{
        
        if(item.className.includes(itemValue)){
          item.style.display="block";
        }else{
          item.style.display="none";
        }
      })
   })
}

fiterSearch()
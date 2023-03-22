
//  ***************** All microsoft ******************* 

// toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show1')) {
        openDropdown.classList.remove('show1');
      }
    }
  }
}


// ********************* Menu Button *****************

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// ***************** Software *******************

const soft_downbtn = document.querySelector(".soft_updown");
const soft_drop = document.querySelector(".soft-hideshow");

soft_downbtn.addEventListener("click", () => {
    soft_drop.classList.toggle("hidden");
});

const soft_arrowIcon = document.querySelector('.soft-arrow');
const soft_arrowIcon2 = document.querySelector('.soft-arrow-container');

soft_arrowIcon2.addEventListener('click', () => {
    soft_arrowIcon.classList.toggle('rotate-180');
});


//  ***************** PCs & Devicecs ******************* 

const pc_downbtn = document.querySelector(".pc_updown");
const pc_drop = document.querySelector(".pc_hideshow");

pc_downbtn.addEventListener("click", () => {
    pc_drop.classList.toggle("hidden");
});

const pc_arrowIcon = document.querySelector('.pc_arrow');
const pc_arrowIcon2 = document.querySelector('.pc_arrow-container');

pc_arrowIcon2.addEventListener('click', () => {
    pc_arrowIcon.classList.toggle('rotate-180');
});


//  ***************** Entertainment ******************* 

const ent_downbtn = document.querySelector(".ent_updown");
const ent_drop = document.querySelector(".ent_hideshow");

ent_downbtn.addEventListener("click", () => {
    ent_drop.classList.toggle("hidden");
});

const ent_arrowIcon = document.querySelector('.ent_arrow');
const ent_arrowIcon2 = document.querySelector('.ent_arrow-container');

ent_arrowIcon2.addEventListener('click', () => {
    ent_arrowIcon.classList.toggle('rotate-180');
});

//  ***************** Business ******************* 

const bus_downbtn = document.querySelector(".bus_updown");
const bus_drop = document.querySelector(".bus_hideshow");

bus_downbtn.addEventListener("click", () => {
    bus_drop.classList.toggle("hidden");
});

const bus_arrowIcon = document.querySelector('.bus_arrow');
const bus_arrowIcon2 = document.querySelector('.bus_arrow-container');

bus_arrowIcon2.addEventListener('click', () => {
    bus_arrowIcon.classList.toggle('rotate-180');
});

//  ***************** Devloper ******************* 

const dev_downbtn = document.querySelector(".dev_updown");
const dev_drop = document.querySelector(".dev_hideshow");

dev_downbtn.addEventListener("click", () => {
    dev_drop.classList.toggle("hidden");
});

const dev_arrowIcon = document.querySelector('.dev_arrow');
const dev_arrowIcon2 = document.querySelector('.dev_arrow-container');

dev_arrowIcon2.addEventListener('click', () => {
    dev_arrowIcon.classList.toggle('rotate-180');
});

//  ***************** Other ******************* 

const oth_downbtn = document.querySelector(".oth_updown");
const oth_drop = document.querySelector(".oth_hideshow");

oth_downbtn.addEventListener("click", () => {
    oth_drop.classList.toggle("hidden");
});

const oth_arrowIcon = document.querySelector('.oth_arrow');
const oth_arrowIcon2 = document.querySelector('.oth_arrow-container');

oth_arrowIcon2.addEventListener('click', () => {
    oth_arrowIcon.classList.toggle('rotate-180');
});




// ******************************************
// ******************************************
// ******************************************
//                 Error Massage
// ******************************************
// ******************************************
// ******************************************

function dbox (msg) {
  if (msg != undefined) {
    document.getElementById("boxBack").classList.add("show");
  } else { document.getElementById("boxBack").classList.remove("show"); }
}




// ******************** SlideSHow *****************

var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 5000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }
let menuLi =document.querySelectorAll('header ul li a');
let section =document.querySelectorAll('section'); 

function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec=>sec.classList.remove("active"));
  menuLi[len].classList.add("active");
  }
  activeMenu();
  window.addEventListener("scroll",activeMenu);
  ////////
  const headerScrollBg=document.querySelector("header");
  window.addEventListener("scroll",function(){
    headerScrollBg.classList.toggle("sticky",this.window.scrollY>20)
  })

/////////////////
  let menuIcon = document.querySelector("#menu-icon");
  let navList=document.querySelector(".navList");

  menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
  }

  window.onscroll=()=>{
   menuIcon.classList.remove("bx-x");
   navList.classList.remove("open");
  }
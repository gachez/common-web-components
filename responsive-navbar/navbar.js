//event to toggle the menu btn

let menuBtn = document.getElementsByClassName('menu-button')[0];
let bigMenuBtn = document.getElementsByClassName('menu-button')[1]
let slideMenu = document.getElementsByClassName('slide-menu')[0]
let slideMenuBtn = document.getElementsByClassName('slide-menu-btn')[0]

const toggleMenu = () =>{
            slideMenu.style.display="block"
 
}


const toggleMenuClose = () =>{
           
            slideMenu.style.display="none"
 
}

bigMenuBtn.addEventListener('click', toggleMenu)
menuBtn.addEventListener('click', toggleMenu)
slideMenuBtn.addEventListener('click',  // use setTimeout() to execute
  toggleMenuClose
)
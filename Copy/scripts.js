
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search icon
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");  //replacing the icons class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");   //replacing the icons class
   }
  }

  
  
//  ****** My changes ******

function viewBtnChange(x) {
  x.classList.toggle("bxs-grid");
}


// Close the dropdown menu if the user clicks outside 




// dropdown menu in settings (sucessfull)

let settingsMenu = document.querySelector("#showSettingMenu");
let items = document.querySelector('.setting-dropdown');
let arrow = document.querySelector('.fi-rr-caret-up');

settingsMenu.addEventListener("click", ()=>{
  items.classList.toggle("active");
  arrow.classList.toggle("active");
});

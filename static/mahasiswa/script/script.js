let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");


// ckeditor
CKEDITOR.replace( 'editor1',{
  // width: '70%',
  height: 800,
  // removeButtons: 'PasteFromWord'
});


closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  replaseicon();
  // menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

function replaseicon(){
  if(sidebar.classList.contains("open")){
    document.getElementById("btn").className = "fas fa-times";
    document.getElementById("logo").className = "fas fa-align-justify";
    document.getElementById("sidbar").style.width= "200px";
    document.getElementById("sidbar").style.height= "100%";
    document.getElementById("sidbar").style.backgroundColor="black";
    document.getElementById("menusidbar").style.display='';
    
  }else{
    document.getElementById("btn").className = "fas fa-chevron-right";
    document.getElementById("logo").className = "";
    document.getElementById("btn").style.Color="black";
    document.getElementById("sidbar").style.width= "50px";
    document.getElementById("sidbar").style.height= "75px";
    document.getElementById("sidbar").style.backgroundColor="#0000004f";
    document.getElementById("menusidbar").style.display='none';
  }
}




// following are the code to change sidebar button(optional)
// function menuBtnChange() {
//  if(sidebar.classList.contains("open")){
//    closeBtn.classList.replace("fas fa-times", "fas fa-chevron-right");//replacing the iocns class
//  }else {
//    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//  }
// }

var menu = document.querySelector(".menu")
var menu1 = document.querySelector(".menu1")
var sidemenu = document.querySelector(".side-menu-content")
var pg1content = document.querySelector(".pg1-content-right")
var videodiv = document.querySelector(".videodiv")
var videomaker = document.querySelector(".videomaker")
var id = document.querySelector(".id")
var id1 = document.querySelector(".id1")
var profile = document.querySelector(".profile")
var flag = 0
menu.addEventListener("click",function(){
    sidemenu.style.left = `0`
    pg1content.style.position = "fixed"
})
menu1.addEventListener("click",function(){
    sidemenu.style.left = `-100%`
    pg1content.style.position = ""

})

videomaker.addEventListener("click",function(){
    if(flag == 0){
        videodiv.style.top = `0`
        flag = 1
    }else{
        videodiv.style.top = `-30%`
        flag = 0
    }
    
})


id.addEventListener("click",function(){
        profile.style.right = `0`
        profile.style.marginRight = "7vmax"
        pg1content.style.position = "fixed"
      
    
})
pg1content.addEventListener("click",function(){
    profile.style.right = `-70%`
    pg1content.style.position =""
  

})
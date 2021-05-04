var menuItem = document.getElementsByClassName("header__menu-listitem");
for(var i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener("mouseover", function(){
        console.log(this.lastChild.previousSibling);
        var sottoMenu = this.lastChild.previousSibling;
        if(sottoMenu.classList.contains("header__submenu")){
        //    sottoMenu.style.display = "block";
            sottoMenu.style.maxHeight = sottoMenu.clientHeight * 5 + "px";
        }
    })
    menuItem[i].addEventListener("mouseleave", function(){
        console.log(this.lastChild.previousSibling);
        var sottoMenu = this.lastChild.previousSibling;
        if(sottoMenu.classList.contains("header__submenu")){
          //  sottoMenu.style.display = "none";
            sottoMenu.style.maxHeight = null;
        }
    })
}

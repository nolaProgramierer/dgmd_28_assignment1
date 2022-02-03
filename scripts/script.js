document.addEventListener("DOMContentLoaded", function () {

    //Fade effect on page load
    loadHeroText();

    //Show favorite place
    showHeroText();
    
    //Mouseover effects for images
   document.querySelectorAll("img").forEach(function (img) {
        img.addEventListener("mouseover", function () {
            this.style.transition = "opacity 1s";
            this.style.transition = "transform 1s ease";
            this.style.opacity = "1";
            this.style.transform = "scale(1.02)";       
            console.log("Mouse over image");
       });
        img.addEventListener("mouseout", function () {
            this.style.transition = "opacity 1s";
            this.style.transition = "transform 1s ease";
            this.style.opacity = ".9";
            this.style.transform = "scale(1)";
            console.log("Mouse not over image");
    });
   });

   function loadHeroText() {
        let element = document.querySelector("#fav-place");
        element.style.transition = "opacity 3s";
        element.style.opacity = "1";
        console.log("Loading hero text");
   }

   function showHeroText() {  
    let img = document.querySelector("#hero-img");   
    img.addEventListener("click", function () { 
        let element = document.querySelector("#fav-place2");  
        element.style.transition = "opacity 3s";
        element.style.opacity = "1";
        console.log("Showing hero text");
    })
   }
    console.log("DOM Content parsed and loaded.");
});//End DOM Content Loaded
let list = document.querySelectorAll(".nevigater li")



function activelink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    })

    this.classList.add("hovered");
}
list.forEach(item =>item.addEventListener("mousehover", activelink));

//main toggale

let toggle = document.querySelector(".toggle");
let nevigater = document.querySelector(".nevigater");
let main = document.querySelector(".main");

toggle.onclick = function(){
    nevigater.classList.toggle("active");
    main.classList.toggle("active");    
};  

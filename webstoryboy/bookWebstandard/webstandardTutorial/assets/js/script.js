//tab 
const codeLink = document.querySelectorAll(".code_link .sub li");
const codeView = document.querySelectorAll(".code_view > div");

codeLink.forEach((elem, index) => {
    elem.addEventListener("click",function(){
        
        codeLink.forEach(el => {
            el.classList.remove("active");
        });
        elem.classList.add("active");
        
        codeView.forEach(el => {
            el.style.display = "none";
        })
        codeView[index].style.display = "block";

    });
})
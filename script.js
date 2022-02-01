var btn = document.getElementsByClassName("btn");
var len = btn.length;
// console.log(len);
for (var i = 0; i < len; i++){
    btn[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var txt = this.nextElementSibling;
        if(txt.style.display == "block"){
            txt.style.display = "none";
        }else{
            txt.style.display = "block";
        }
    });
}
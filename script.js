let btn = document.querySelector(".btn")
let bestModal = document.querySelector(".best__modal-text-2")
btn.addEventListener("click", function(){
    if(bestModal.className === "best__modal-text-2"){
        bestModal.classList.add("new")
    }
    else{
        bestModal.classList.remove("new")
    }
})
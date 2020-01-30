const btn = document.getElementById("btn-reset");
let container = document.body.querySelector("#container");
function generatePad(size){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i<size; i++){
        for (let j = 0; j<size; j++){
        let newDiv = document.createElement("div");
        newDiv.className = "div-new";
        container.appendChild(newDiv);
        }
    }
}

container.addEventListener("mouseover",function(e){
    event.target.style.backgroundColor = "gray";
    console.log(e.target);
})
btn.addEventListener("click", function(){
    generatePad(window.prompt("Size?", "16"));
});



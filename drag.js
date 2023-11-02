
const containers = document.querySelectorAll(".container");



const draggedState = {
    element:null,
    parent:null
}



function onDragStart(e){

    const srcCard = e.target;
    const parentCard = srcCard.parentNode;

    draggedState.element = srcCard;
    draggedState.parent = parentCard;

    // console.log("Dragging Started !");
    // console.log(draggedState);
}

for(let i = 0 ; i < containers.length ; i++){
    containers[i].addEventListener("dragover",onDragOver);
    containers[i].addEventListener("drop",onDrop);
}

function onDragOver(e){
    console.log("oh yeah");

    const curr = e.target.closest(".container");

   

    if(curr.id != draggedState.parent.id){
        e.preventDefault();
    }
}

function onDrop(e){
    
    const dest = e.target;
    

    dest.appendChild(draggedState.element);
    draggedState.element = null;
    draggedState.parent = null;
}
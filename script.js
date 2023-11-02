

const btn = document.getElementById("createIssue");
const textArea = document.getElementById("text-Area");
const toDoContainer = document.getElementById("to-do");




btn.addEventListener("click",displayText);




function toggleElements(){

    btn.classList.toggle("hide");
    textArea.classList.toggle("hide");
    if(!textArea.classList.contains("hide")){
        textArea.focus();
    }

}

textArea.addEventListener("blur",unhideBtn);

function unhideBtn(){

    if(!textArea.classList.contains("hide")){
        toggleElements();
    }

}

function displayText(){
    toggleElements();
}

// 

textArea.addEventListener("keyup",enterText);

function enterText(e){
    
    const issueInput = textArea.value;

    if(e.keyCode === 13 && issueInput){
        
        const card = document.createElement("div");
        card.className = "card";
    
        card.innerHTML=`
        <span class="para-text">${issueInput}</span>
        <button id="delete-btn" onclick="editCard(this)" class="edit">
            <span style="font-size:16px" class="material-symbols-outlined ">edit</span>
        </button>
        </div>
        <button id="delete-btn" onclick="deleteCard(this)" class="delete">
            <span style="font-size:16px" class="material-symbols-outlined  ">delete</span>
        </button>`
        
        card.draggable = true;
        card.addEventListener("dragstart",onDragStart);

        toDoContainer.appendChild(card);

        console.log("card added");
        toggleElements();
        textArea.value="";      
    
    }
    if(!issueInput){
        return;
    }

}



function deleteCard(e){
    const parent = e.parentNode;
   
    parent.remove();
}

function editCard(e){

    console.log(e);
    const parent = e.parentNode;

   console.log(parent.children[0].innerText);

   const pElement = parent.children[0];
   
   pElement.contentEditable = "true";
   pElement.focus();
   pElement.addEventListener("keyup",toggleEdit);
   
}

function toggleEdit(e){
    
    if(e.keyCode === 13){
        e.preventDefault();
        const note = e.target.innerText;
        console.log(note);
        const element = e.target;
        element.contentEditable = "false";
        element.focus();
    }
}


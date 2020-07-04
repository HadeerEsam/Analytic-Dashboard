let widgetIds,childId;
// if this is first time for user show add icons
if(localStorage.getItem("widgetId")==null){
     widgetIds=[];
     $('.slot').html('<i class="fas fa-plus-circle  fa-2x  "></i>');
}
else{
    // get the layout of the dashboard the user choose it before
     widgetIds=JSON.parse(localStorage.getItem("widgetId"));

    if(widgetIds[0]==null){
        $('#slot1').append('<i id="icon1" class="fas fa-plus-circle  fa-2x  "></i>');
    }
    if(widgetIds[1]==null){
        $('#slot2').append('<i id="icon2" class="fas fa-plus-circle  fa-2x  "></i>');
    }
    $("#slot1").append($(`#${widgetIds[0]}`));
     $("#slot2").append($(`#${widgetIds[1]}`));
     styleAtDrop();
}

 // get widget list
let dragableitems=document.getElementsByClassName("widget-info");

// loop over all widgets 
for(item of dragableitems){
    // get the dragable element
    item.addEventListener("dragstart",function dragStart(event)
    {
       event.dataTransfer.setData("Text", event.target.id);  
    });

    //  adding border and change color of paragraph while draging
    item.addEventListener("drag",function draging(event)
    {
        this.parentElement.style.border='1.5px dashed #cccccc';
        event.target.children[1].classList.add('text-secondary') ;
    });
    
    //  change border style and change color of paragraph when draging end
    item.addEventListener("dragend",function dragEnd(event)
    {
        this.parentElement.style.border='1px solid #cccccc';
        event.target.children[1].classList.remove('text-secondary') ;   
    });
}

// get the drop slots element
let dropslot=document.getElementsByClassName("slot");

// loop over all drop slots
for(slot of dropslot){
    let dropTries=0;
    //  changing border style and change background color within drop area
    slot.addEventListener("dragover",function dragOver(event)
    {
        event.preventDefault();
        this.style.border='2px rgba(148, 200, 235, 0.849) solid';
        this.style.backgroundColor='rgba(148, 200, 235, 0.192)';
    });
    
    //  change border and change background color when leaving drop area
    slot.addEventListener("dragleave",function dragLeave(event)
    {
        this.style.border=' dashed 1.5px #cccccc';
        this.style.backgroundColor='#fefefe';

    });
    

    slot.addEventListener("drop",function droped(event)
    {
        dropTries++;
        event.preventDefault();
        styleAtDrop();

        // add widget to drop area
        let data = event.dataTransfer.getData("Text");
        this.appendChild(document.getElementById(data));

        // add widget to drop area when parent is empty
        if(this.children.length==1){
            this.appendChild(document.getElementById(data));
        }
        else{
            childId= this.children[0].id; 
            // remove plus icon from drop area at first time the user open 
            if(localStorage.getItem("widgetId")==null && dropTries==1){     
               this.children[0].remove();            
            }
            else{
                // remove plus icon from drop area at first time the user open
               if(dropTries==1 && (this.children[0].id=='icon1'||this.children[0].id=='icon2')){
                this.children[0].remove();
            } 
             // return widget to initial position when another widget put over it
            else{
                returnInitialPosition();
             }  
            }
        }
    });
}
 // return widget to initial position when another widget put over it
function returnInitialPosition(){
    switch(childId){
        case "widget1":
            $("#one").append($(`#${childId}`));
            $("#one").css('border','1px solid #cccccc');
            break;
         case "widget2":
             $("#two").append($(`#${childId}`));
             $("#two").css('border','1px solid #cccccc');
            break;
         case "widget3":
             $("#three").append($(`#${childId}`));
             $("#three").css('border','1px solid #cccccc');
            break;
         case "widget4":
             $("#three").append($(`#${childId}`));
             $("#three").css('border','1px solid #cccccc');
            break;
    }
}

// save widget ids in local storage to call them when reload 
function save(){
    let id1=$("#slot1").children().attr("id");
    let id2= $("#slot2").children().attr("id");
    widgetIds=[id1,id2];
    localStorage.setItem("widgetId",JSON.stringify(widgetIds));
}


function styleAtDrop(){
    //  change border and change background color 
    $(".slot").css({'border':' solid 1.5px #cccccc','background-color':'#fefefe'});
}






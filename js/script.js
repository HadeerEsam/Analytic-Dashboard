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
                returnInitialPosition(childId);
             }  
            }
        }
    });
}
 // return widget to initial position when another widget put over it
function returnInitialPosition(childId){
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
             $("#four").append($(`#${childId}`));
             $("#four").css('border','1px solid #cccccc');
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


// closing widget menue
$('#close').click(function () { 
    $('#widgets').animate({left:'-100%'},1000);
});

// widget menue sliding and scrolling
$(".widget-options li").click(function(){
    $('#widgets').animate({left:'0px'},1000);
    let offsetTop;
    switch($(this).attr('id')){
        case 'bar-icon':
         offsetTop=$("#close").offset().top;
         $('#widgets').animate({scrollTop:offsetTop},700);
         break;
        case 'line-icon':
         offsetTop=$("#two").offset().top;
         $('#widgets').animate({scrollTop:offsetTop },700);
         break;
        case 'pie-icon':
         offsetTop=$("#three").offset().top; 
         $('#widgets').animate({scrollTop:offsetTop},700);
         break;
        case 'area-icon':
         offsetTop=$("#four").offset().top;  
         $('#widgets').animate({scrollTop:offsetTop},700);
         break;

    }

});


//Enter full screen

/* Get into full screen */
function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
	
	// If no element is in full-screen
	if(full_screen_element === null)
		return false;
	else
		return true;
}
//full screen button function

$('.nav-icons .fullscreen').click(function(){
    if(IsFullScreenCurrently())
        GoOutFullscreen();
    else
        GoInFullscreen($("html").get(0));
});

// delete dashboard
$('.nav-icons .delete').click(function(){
    if(localStorage.getItem("widgetId")==null){
        let slots=$('.slot');
        for (i of slots){
            let widget=slots.children().attr('id');
            returnInitialPosition(widget);
        }
        // $('.slot').html('<i class="fas fa-plus-circle  fa-2x  "></i>');
        
    }else{
        widgetIds=JSON.parse(localStorage.getItem("widgetId"));
    for (id of widgetIds){
        returnInitialPosition(id);
    }
    localStorage.clear();
    widgetIds=[];
    $('.slot').html('<i class="fas fa-plus-circle  fa-2x  "></i>');
    }
});




let element=document.getElementById("draggable");

element.addEventListener("mousedown", function(e){
    let offsetX=e.clientX-element.offsetLeft;
    let offsetY=e.clientY-element.offsetTop;

    function moveMouse(event){
        element.style.left=event.clientX-offsetX+"px";
        element.style.top=event.clientY-offsetY+"px";
    }

    document.addEventListener("mousemove", moveMouse);

    document.addEventListener(
        "mouseup",
        function(){
            document.removeEventListener("mousemove", moveMouse);
        },
        {once:true}
    );
});


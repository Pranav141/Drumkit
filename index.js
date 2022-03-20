function makesound(key){
    if(key=='w'){
        var url="sounds/tom-1.mp3";    
    }
    else if(key=='a'){
        var url="sounds/tom-2.mp3";
    }
    else if(key=='s'){
        var url="sounds/tom-3.mp3";
    }
    else if(key=='d'){
        var url="sounds/tom-4.mp3";
    }
    else if(key=='j'){
        var url="sounds/crash.mp3";
    }
    else if(key=='k'){
        var url="sounds/kick-bass.mp3";
    }
    else if(key=='l'){
        var url="sounds/snare.mp3";
    }
    audio1=new Audio(url);
    audio1.play();
}
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    var key=this.innerHTML;
    makesound(key);
    buttonAnimation(key);
    });
}
document.addEventListener("keydown",function(event){
    key=event.key;
    makesound(key);
    buttonAnimation(key);

})
function buttonAnimation(key){
    var currentkey=document.querySelector("."+key);
    currentkey.classList.add("pressed");
    setTimeout(function(){
    currentkey.classList.remove("pressed");
    },100)

}
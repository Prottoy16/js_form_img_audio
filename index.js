var form=document.querySelector("form");
var name1=form.querySelector("#name");
var email=form.querySelector("#email");
var password=form.querySelector("#password");

form.addEventListener("submit",function(e){
e.preventDefault();
var personInfo={
    name:name1.value,
    email:email.value,
    password:password.value,
}
console.log(personInfo);
});
name1.addEventListener("focusin",function(){
name1.classList.add("class-style");
});
name1.addEventListener("focusout",function(){
name1.classList.remove("class-style");
});

email.addEventListener("focusin",function(){
email.classList.add("class-style");
});
email.addEventListener("focusout",function(){
email.classList.remove("class-style");
});

password.addEventListener("focusin",function(){
password.classList.add("class-style");
});
password.addEventListener("focusout",function(){
password.classList.remove("class-style");
});

// music part
for(var i=0;i<3;i++) {
    var Btn=document.querySelectorAll("div .button")[i];

Btn.addEventListener("click",function(){
var text=this.innerText;
 music(text);

});
}

function music(text){
    switch(text){
        case "music1":
            var audio=new Audio("kobitar_gan.mp3");
            audio.play();
            break;
        case "music2":
            var audio=new Audio("mayabee.mp3");
            audio.play();
            break;
        case "music3":
            var audio=new Audio("nithur mono.mp3");
            audio.play();
            break;
    }
}


var imgTag=document.querySelector("div img");
for(var i=0;i<3;i++) {
    var Img=document.querySelectorAll("div .buttons")[i];

     Img.addEventListener("click",function(){
     var m=this.innerText;
     switch(m){
        case "image1":
        imgTag.src="pinaky.jpg";
        break;
        case "image2":
        imgTag.src="pkb.jpg";
        break;
        case "image3":
        imgTag.src="prottoy.jpg";
        break;

     }
    });
}
var images=["pinaky.jpg","pkb.jpg","prottoy.jpg"];
 
var L_img=document.querySelector("#IMg");
var previous=document.querySelector(".btn1");
var next=document.querySelector(".btn2");
count=0;
next.addEventListener("click",function(){
    count++ ;
  if(count<3){
    L_img.src=images[count];
  }
  else {
    L_img.src=images[0];
    count=0;
  }

});

previous.addEventListener("click",function(){
count--;
if(count>=0){
    L_img.src=images[count];
}
else {
    L_img.src=images[images.length-1];
    count=images.length-1;
}
});


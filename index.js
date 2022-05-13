var t=1;
var back=document.querySelector(".div1");
var nav=document.querySelector(".nav1");
var menu=document.querySelector(".mnav");

var respo=pageXOffset;

if(respo < 1000){
  
  back .style.backgroundImage="url(./images/slider-image2.jpg)";
  switch (t) {
    case 1:
        
document.querySelector('.sb1').style.background="none";
        break;
        
        case 3:
        
document.querySelector('.sb3').style.background="none";
        break;
    }
    document.querySelector('.sb2').style.background='white';
    t=2;
 } 


///////respo

window.addEventListener("scroll",function(){
  
  let x11=pageYOffset;
  console.log(x11);
  if(x11 >= 600){
  nav.className="nav2";
  console.log("kirildi");
  menu.className="mnav2";
  }
  if(x11 < 600){
    menu.className="mnav";
    nav.className="nav1";
    
  }  
});


  function ss(){

    switch (t) {
    case 2:
        
    document.querySelector('.sb2').style.background="none";
        break;
        
        case 3:
        
       document.querySelector('.sb3').style.background="none";
        break;
    }  
    t=1;
    document.querySelector('.sb1').style.background="white";
   
    back.style.opacity="0";
    setTimeout(() => {  back.style.opacity="1"; }, 520);
   setTimeout(() => {document.querySelector(".yozuv h1").innerHTML="Our mission is to provide an <br> unforgettable experience";},300);

    setTimeout(() => {  back.style.backgroundImage="url(./images/slider-image1.jpg)";}, 300);

    
    
    
        
}
//////////////ss2


function ss2(){
     switch (t) {
        case 1:
            
    document.querySelector('.sb1').style.background="none";
            break;
            
            case 3:
            
    document.querySelector('.sb3').style.background="none";
            break;
        }

        t=2;
        back.style.opacity="0";
        setTimeout(() => {  back.style.opacity="1"; }, 520);
        setTimeout(() => {  back.style.backgroundImage="url(./images/slider-image2.jpg)";}, 300);   
        setTimeout(() => {document.querySelector(".yozuv h1").innerHTML="The best dinning quality can <br> be here too!";},300);
   
        document.querySelector('.sb2').style.background='white';


}

///////////////ss3
function ss3(){
    switch (t) {
        case 1:
            
    document.querySelector('.sb1').style.background="none";
            break;
            
            case 2:
            
    document.querySelector('.sb2').style.background="none";
            break;
        }
        t=3;
        back.style.opacity="0";
        setTimeout(() => {  back.style.opacity="1"; }, 500);
        setTimeout(() => {document.querySelector(".yozuv h1").innerHTML="Enjoy our special menus every <br> Sunday and Friday"},300);
        setTimeout(() => {  back.style.backgroundImage="url(./images/slider-image3.jpg)";}, 300);
   
      document.querySelector('.sb3').style.background="white";
    
}
var pc=1;
function openclose(){
  if(pc==1){
    document.querySelector('.ci1').style.display="none";
    document.querySelector('.ci1').style.opacity="0";
    document.querySelector('.c1').style.display="block";
    document.querySelector('.c1').style.width="100%";
    document.querySelector('.c1').style.height="100vh";
    document.querySelector('.c1').style.opacity="1";
    document.querySelector('.c1').style.transition="1s";
    pc=0;

    
  }
  else{
    
    document.querySelector('.ci1').style.display="block";
    document.querySelector('.ci1').style.opacity="1";
    document.querySelector('.c1').style.display="none";
    document.querySelector('.c1').style.width="0";
    document.querySelector('.c1').style.height="0";
    document.querySelector('.c1').style.opacity="0";
    
    document.querySelector('.ci1').style.transition="1s";
    pc=1;
    
    
    
  }
}
var i=0;
var images=[];
var time=2000;
images[0]='img/1.jpg';
images[1]='2.jpg';
images[2]='3.jpg';

function slideImg(){
    document.slide.src =images[i];
    if(i<images.length-1){
        i++;

    } else{
        i=0;
    }
    setTimeout("slideImg()",time);
}

window.onload=slideImg;
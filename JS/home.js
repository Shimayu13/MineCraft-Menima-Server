var pics_src = new Array("../Picture/topic1.jpeg","../Picture/topic3.jpeg","../Picture/topic4.jpeg","../Picture/topic5.jpeg","../Picture/topic6.jpeg","../Picture/topic2.jpeg");
var num = -1;

function slideshow_timer(){
    if (num == 5){
        num = 0;
    } else {
        num ++;
    }
    document.getElementById("mypic").src = pics_src[num];
    if (num == 0,4){
        setTimeout(slideshow_timer, 5000); 
    } else if (num == 1,2,3) {
        setTimeout(slideshow_timer, 1000);
    } else if (num == 5) {
        setTimeout(slideshow_timer, 2000);
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    slideshow_timer();
});
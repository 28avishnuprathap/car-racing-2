canvas = document.getElementById("myCanvas");
pen=canvas.getContext("2d");
car1width=100;
car1height=90;
car1img="car1.png";
car1X=30;
car1Y=0;

car2width=100;
car2height=90;
car2img="car1.png";
car2X=30;
car2Y=110;
backgroundimg="racing.jpg";
function add(){
    backgroundimgtag= new Image();
    backgroundimgtag.onload=uploadbackground;
    backgroundimgtag.src=backgroundimg;

car1imgtag= new Image();
   car1imgtag.onload=uploadcar1;
    car1imgtag.src=car1img;


car2imgtag= new Image();
   car2imgtag.onload=uploadcar2;
    car2imgtag.src=car2img;
}
function uploadbackground(){
    pen.drawImage(backgroundimgtag,0,0,canvas.width, canvas.height);
}
function uploadcar1(){
    pen.drawImage(car1imgtag,car1X,car1Y,car1width,car1height);
}

function uploadcar2(){
    pen.drawImage(car2imgtag,car2X,car2Y,car2width,car2height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
    }
    if(keypressed=="40"){
        down();
    }
    if(keypressed=="39"){
        right();
    }
    if(keypressed=="37"){
        left();
    }
}

function up(){
    if(car1Y>=0){
        car1Y=car1Y-10;
        uploadbackground();
uploadcar1();
    }
}
function down(){
    if(car1Y<=500){
        car1Y=car1Y+10;
        uploadbackground();
uploadcar1();
    }
}
function left(){
    if(car1X>=0){
        car1X=car1X-10;
        uploadbackground();
uploadcar1();
    }
}
function right(){
    if(car1X<=700){
        car1X=car1X+10;
        uploadbackground();
uploadcar1();
    }
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="23"){
        w();
    }
    if(keypressed=="19"){
        s();
    }
    if(keypressed=="1"){
        a();
    }
    if(keypressed=="4"){
        d();
    }
}

function w(){
    if(car2Y>=0){
        car2Y=car2Y-10;
        uploadbackground();
uploadcar1();
    }
}
function s(){
    if(car2Y<=500){
        car2Y=car2Y+10;
        uploadbackground();
uploadcar1();
    }
}
function a(){
    if(car2X>=0){
        car2X=car2X-10;
        uploadbackground();
uploadcar1();
    }ww
}
function d(){
    if(car2X<=700){
        car2X=car2X+10;
        uploadbackground();
uploadcar1();
    }
}
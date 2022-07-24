img = "";
status = ""; 
objects = [];
function preload(){
    alarm=loadSound('mixkit-street-public-alarm-997.wav')
}
function setup(){
    canvas=createCanvas(380, 380);
    canvas.position(600, 200);
    video=createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    alarm.play();

}
function modelLoaded(){
    console.log("Model Loaded!");
    status="true";
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
        console.log(results);
        objects=results;
}
function draw(){
    function draw(){
        image(video, 0, 0, 380, 380)
        if(status != ""){
            r=random(255);
            g=random(255);
            b=random(255);
            for(i=0;i<objects.length(); i++){
                document.getElementById("status").innerHTML="Object Detected";
                document.getElementById("is_baby_detected").innerHTML="Baby Is Detected";
                fill(rgb);
                percent=floor(objects[i].confidence * 100);
                text=text(objects[i].label+""+percent+"%"+objects[i].x+15+objects[i].y+15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                alarm.stop();
            }
        }
    }

}


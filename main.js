Webcam.set({
    width:350,
    height:300
});
Webcam.attach("camera");
function snapshot(){
    Webcam.snap(function(data_uri)
    {document.getElementById("result").innerHTML="<img id='image1'src="+data_uri+">";
    }
    );}
    console.log("ml5version =",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9WMRS4u_U/model.json",Modelloaded);
    
    
function Modelloaded(){
    console.log("Model Loaded");
}
function check(){
img=document.getElementById("image1");
classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
   }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    
}

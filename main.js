prediction = "";
Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 90
});
cam = document.getElementById("camerae");
Webcam.attach("#camerae");
console.log("ml5.version", ml5.version);
x = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C8P3hT2Ws/model.json', moelLoaded);
function moelLoaded(){
    console.log("Model loaded!");
}
function capture(){
    Webcam.snap(function(sfh){
document.getElementById("result").innerHTML = '<img id="img654" src="'+sfh+'">';
    });
}
function predict(){
y = document.getElementById("img654");
x.classify(y, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error)
        var synth2 = window.speechSynthesis; 
        speak_data_1 = "There was an error, please try again, we are sorry for the inconvenience"; 
         var utterThis = new SpeechSynthesisUtterance(speak_data_1); 
        synth.speak(utterThis);
     }
     else{
         console.log(result);
         document.getElementById("pre").innerHTML = result[0].label;
         prediction = result[0].label;
         speak();
         if(result[0].label == "Amazing"){
           document.getElementById("emo").innerHTML = "&#128076 - This is amazing!!!";  
         }
         if(result[0].label == "Thumbs up"){
            document.getElementById("emo").innerHTML = "&#128077 - I like it!!!";  
          }
          if(result[0].label == "Thumbs down"){
            document.getElementById("emo").innerHTML = "&#128078 - I dont like it, i hate it.";  
          }
          if(result[0].label == "Victory"){
            document.getElementById("emo").innerHTML = "&#9996 - Good job at winning!!!"; 
          }
          if(result[0].label == "Clap"){
            document.getElementById("emo").innerHTML = "&#128079 - Thank you for clapping :)"; 
          }
     }
    }
    function speak(){
        var synth = window.speechSynthesis; 
        speak_data_1 = "The prediction is " + prediction; 
        var utterThis = new SpeechSynthesisUtterance(speak_data_1); 
        synth.speak(utterThis);
    }

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mymodel = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){
  console.log('Model Has Loaded');
}
function draw(){
  image (video,0,0,300,300);
  mymodel.classify(video, gotResult);
}
previousresult = '';
function gotResult(error,results){
if(error){
  console.log(error);
}
else{
if((results[0].confidence > 0.5)&&(previousresult!=results[0].label)){
console.log(results);
previousresult=results[0].label;
API = window.speechSynthesis;
baat = 'Object Detected is '+ results[0].label;
saythis= new SpeechSynthesisUtterance(baat);
API.speak(saythis);

document.getElementById('on').innerHTML=results[0].label;
document.getElementById('AC').innerHTML=results[0].confidence.toFixed(2);

}
}
}





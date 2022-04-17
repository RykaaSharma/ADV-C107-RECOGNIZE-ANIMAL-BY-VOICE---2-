function startClassification()
{
    navigator.mediaDevices.getUserMedia({
   auto:true });
   classifier = ml5.sounClassifier('https://teachablemachine.withgoogle.com/models/YkVExXIlC/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}
Webcam.set({
    widht:350,
    height:300,
    imageFormat:'png',
    pngQuality:90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zWAlwtGPi/model.json',modelLoaded);
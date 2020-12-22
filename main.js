function start()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("input").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    console.log(speak_data);
}
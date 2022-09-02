
// Variables //
const textarea = document.querySelector('#text');
let voiceList = document.querySelector('#voice');
let speechbtn = document.querySelector ('.submit')


let synth = SpeechSynthesis
let isSpeaking = true;

function voicespeech () {
    for (let voice of synth.getVoices()) {
        let option = document.createElement ('option')
        option.text = voice.name 
        voiceList.add (option);
        console.log(option)
    }
}

synth.addEventListener ('voicechanged', voicespeech)

function texttosspeech (text) {
    let utternance = new SpeechSynthesisUtterance (text) 
    for (let voice of synth.getVoices()) {
        utternance.voice = voice;
    }
}
speechSynthesis.speak(utternance);

speechbtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (textarea.value = '') {
        if (!synth.isSpeaking) {
            texttosspeech (textarea.value)
        }
        if (textarea.value.length > 80) {
            if (isSpeaking) {
                synth.resume ()
                isSpeaking = false 
                speechbtn.innerHTML = 'Pause Speech'
            } else {
                synth.pause()
                isSpeaking = false;
                speechbtn.innerHTML = 'Resume Speech'
            }

            setInterval (() => {
                if (!synth.speaking && isSpeaking) {
                isSpeaking = true;
                speechbtn.innerHTML = 'Convert to Speech'
                }
            })
        } else {
            speechbtn.innerHTML = 'Convert To Speech';
        }
    }
})
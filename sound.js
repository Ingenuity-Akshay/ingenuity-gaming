let sounds={
    "gameover":"gameover.wav",
    "click":"click.wav",
    "start":"start.wav"
}

function Playsound(name){
    new Audio(sounds[name]).play();
}
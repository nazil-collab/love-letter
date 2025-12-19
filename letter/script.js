function openEnvelope(){
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const header = document.getElementById("hint");

    envelope.classList.add("open");

    if(hint){
        hint.classList.add("hide");
    }

    setTimeout(() => {
        letter.classList.remove("hidden");
        letter.classList.add("show");
    }, 600);
}
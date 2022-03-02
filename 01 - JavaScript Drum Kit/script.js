window.addEventListener('keydown', function(e){
    // console.log(e) // Checkout the "event object" and see the different properties you.

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);

    if (!audio) return; // Exit running the function if the key pressed doesnt have associated audio[data-key] element.

    audio.currentTime = 0; // Rewinding the audio from the start every time a key pressed.
    audio.play()

    key.classList.add('playing')
})

const keys = document.querySelectorAll('.key');



keys.forEach(function(key){
    key.addEventListener('transitionend', function(e){
        if (e.propertyName !== 'transform') {
            return;
        }
        key.classList.remove('playing');
    })
})

// This is the same as the above function, only uses arrow function!
// keys.forEach(key => key.addEventListener('transitionend', function(e){
//     if (e.propertyName !== 'transform') return;

//     key.classList.remove('playing');
// }))
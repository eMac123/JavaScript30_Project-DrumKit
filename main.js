const keyContainer = document.querySelector('.keys');
const keys = document.querySelectorAll('.key');

window.addEventListener('keyup', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function if the key who was pressed isn't from the key list.

    audio.currentTime = 0; //rewind to the start
    audio.play(); // play sound
     
    key.classList.add('playing'); // add class playing when the key are pressed (a little animation)
    
    keys.forEach(e => {
        e.addEventListener('transitionend', function() {
            key.classList.remove('playing');
        })
    })

   
});


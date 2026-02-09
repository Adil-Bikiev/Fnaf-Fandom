function easterEgg(number) {
    let a = document.querySelector(`.egg-card:nth-child(${number})`);
    let extraText = a.querySelector('.extra-text');
    
    if(extraText) {
        extraText.style.opacity = '0';
        extraText.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            if(extraText.parentNode === a) {
                a.removeChild(extraText);
            }
        }, 500);
    } else {
        let newText = document.createElement('div');
        newText.className = 'extra-text';
        newText.style.opacity = '0';
        newText.style.transition = 'opacity 0.5s';
        
        if(number == 1){
            newText.innerHTML = '<br><p>Golden Freddy - A ghostly, withered yellow bear that can appear in your office when certain conditions are met. His appearance often crashes the game or causes instant death.</p>';
        } else if (number == 2){
            newText.innerHTML = '<br><p>Death Minigames - Hidden pixel-art minigames that play after specific nights. These retro-style games reveal crucial backstory about the missing children and Purple Guy\'s crimes.</p>';        
        } else if (number == 3){
            newText.innerHTML = '<br><p>Phantom Animatronics - Burned, glitchy hallucinations in FNaF 3 that appear when systems fail. They cause loud jump scares but don\'t kill you - they just drain your ventilation and distract from Springtrap.</p>';
        } else if (number == 4){
            newText.innerHTML = '<br><p>Music Box - A winding music box in FNaF 2\'s Prize Counter that keeps The Puppet contained. If the melody stops completely, The Puppet emerges from its box and attacks through the vents.</p>';
        }
        
        a.appendChild(newText);
        
        setTimeout(() => {
            newText.style.opacity = '1';
        }, 10);
    }
}

function audioDeath(){
    const audio = new Audio('../assets/audio/scary1.mp3')
    audio.play();
}

function musicStart() {
    const audioOne = new Audio('../assets/audio/scary.mp3');
    audioOne.play();
    audioOne.onended = function () {
        audioDeath();
    }
}




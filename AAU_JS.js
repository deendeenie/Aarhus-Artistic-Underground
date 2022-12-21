// Skullie console check
let skullie = `.         ♡   .  ✦    .
    ✦     _ _ _ _ 
         /        ∖
        /          ∖   ✧ .
    .  |            |
       |  ⬤    ⬤   |    ♡      
       ∖  ▔ ◮  ▔  /
    ✧   / ۵  ۵  ۵ ∖   ✦
 .       ▔ ▔ ▔ ▔    .
           ▶ ✪ ◀   ♡
    ♡     .            ✧

You found Skullie hidden in the console
Skullie was trying to check if the JavaScript works, clearly so did you`
console.log(skullie)

// Language Switch Pop-up

window.onload = function() {
//For the English page
    // Open it
        // Constants
        const langSwitchBtnEN = document.getElementById('NavBarEN').contentWindow.document.getElementById('switchLangEN')
        const switchPopupEN = document.getElementById("switchPopEN")
        const englishButton = document.getElementById('switchEnglish')

        // On click function
        langSwitchBtnEN.addEventListener('click', openSwitchPopUpEN);

        function openSwitchPopUpEN() {
            switchPopupEN.style.display = 'block';
        }
    
        // Close it
        englishButton.addEventListener("click", closeSwitchPopUpEN);
            
        function closeSwitchPopUpEN(){
            switchPopupEN.style.display = 'none';
        }

//Danish page
        // Constants
        const langSwitchBtnDA = document.getElementById('NavBarDA').contentWindow.document.getElementById('switchLangDA')
        const switchPopupDA = document.getElementById("switchPopDA")
        const danishButton = document.getElementById('switchDanish')

        // On click function
        langSwitchBtnDA.addEventListener('click', openSwitchPopUpDA);

        function openSwitchPopUpDA() {
            switchPopupDA.style.display = 'block';
        }

        // Close it
        danishButton.addEventListener("click", closeSwitchPopUpDA);
            
        function closeSwitchPopUpDA(){
            switchPopupDA.style.display = 'none';
        }
}

//Hotel Royal Easter Egg - Turning on some music
    // Constants
    const turntableQuiet = document.getElementById("turntablePrePlay")
    const turntableWithSound = document.getElementById("turntableAfterPlay")
    const HRaudio = document.getElementById("turnTableAudio")
    const clickForNoSound = document.getElementById("turntableStop")

    // Turn on sound
    turntableQuiet.addEventListener("click", HRturnonAudio)
    function HRturnonAudio(){
        turntableQuiet.style.display = 'none';
        turntableWithSound.style.display = 'block';
        clickForNoSound.style.display = 'block';
        HRaudio.play();
    }

    // Turn off
    clickForNoSound.addEventListener("click", HRturnoffAudio)
    function HRturnoffAudio(){
        turntableQuiet.style.display = 'block';
        turntableWithSound.style.display = 'none';
        clickForNoSound.style.display = 'none';
        HRaudio.pause()
        HRaudio.currentTime = 0;
    }

//UnderMasken Easter Egg - The Summoning
    // Constants
    const preClickMask = document.getElementById("turntablePrePlay")
    const maskWithSound = document.getElementById("afterClickMask")
    const UMaudio = document.getElementById("maskAudio")
    const maskStop = document.getElementById("turntableStop")

    // Turn on sound
    turntableQuiet.addEventListener("click", UMturnonAudio)
    function UMturnonAudio(){
        preClickMask.style.display = 'none';
        maskWithSound.style.display = 'block';
        maskStop.style.display = 'block';
        UMaudio.play();
    }

    // Turn off
    maskStop.addEventListener("click", UMturnoffAudio)
    function UMturnoffAudio(){
        maskWithSound.style.display = 'none';
        maskStop.style.display = 'none';
        UMaudio.pause()
        UMaudio.currentTime = 0;
    }
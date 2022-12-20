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
    // Turn on sound
    document.getElementById("turntablePrePlay").addEventListener("click", HRturnonAudio)
    function HRturnonAudio(){
        document.getElementById("turntableAfterPlay").style.display = 'block';
        document.getElementById("turnTableAudio").play();
    }

    // Turn off
    document.getElementById("HRstopMusic").addEventListener("click", HRturnoffAudio)
    function HRturnoffAudio(){
        document.getElementById("turntableAfterPlay").style.display = 'none';
        document.getElementById("turnTableAudio").pause()
    }

//UnderMasken Easter Egg - The Summoning
    // Turn on sound
    document.getElementById("preClickMask").addEventListener("click", UMturnonAudio)
    function UMturnonAudio(){
        document.getElementById("afterClickMask").style.display = 'block';
        document.getElementById("maskAudio").play();
    }

    // Turn off
    document.getElementById("stopSound").addEventListener("click", UMturnoffAudio)
    function UMturnoffAudio(){
        document.getElementById("afterClickMask").style.display = 'none';
        document.getElementById("maskAudio").pause()
    }


//The Seagull Kiss Easter Egg - Noisy bird
    // Turn on sound
    document.getElementById("seagullQuiet").addEventListener("click", SKturnonAudio)
    function  SKturnonAudio(){
        document.getElementById("stopSeagullSound").style.display = 'block';
        document.getElementById("seagullNoisy").style.display = 'block';
        document.getElementById("seagullQuiet").style.display = 'none';
        document.getElementById("seagullSound").play();
    };

    // Turn off
    document.getElementById("stopSeagullSound").addEventListener("click", SKturnoffAudio)
    function SKturnoffAudio(){
        document.getElementById("seagullNoisy").style.display = 'none';
        document.getElementById("seagullQuiet").style.display = 'block';
        document.getElementById("seagullSound").pause()
    }

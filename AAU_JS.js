// Skullie console check
let skullie = `
 .         ♡   .  ✦    .
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
Skullie was trying to check if the JavaScript works, clearly so did you
`
console.log(skullie)

// Language Switch Pop-up
// Open it
window.onload = function() {

    document.getElementById('NavBar').contentWindow.document.getElementById('switchLang').addEventListener('click', openSwitchPopUp);
    function openSwitchPopUp() {
        getElementById('switchPop').style.display("block");
    }

// Close it
    document.getElementById('NavBar').contentWindow.document.getElementById('switchLang').addEventListener("click", closeSwitchPopUp);
    function closeSwitchPopUp(){
        getElementById('switchPop').classList.toggle("lang_popup_none");
    }
}

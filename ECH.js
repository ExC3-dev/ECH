javascript:(function(){var wpm = parseInt(prompt("How high do you want the WPM to be?"));
var origwpm = wpm;
if(isNaN(wpm)) return alert("No number entered");
if(wpm > 150) if(!confirm("WPM higher that 150 could cause you to possibly to lag or freeze.")) return alert("Exiting...")
if(wpm <= 0) return alert("Your WPM cant be less than 0");
alert("Starting...")
var i = 0;
var lastIndex = -1;
var cheat; 
function setCheat() {cheat = setInterval( () => {
setTimeout( () => {
if(core.cur_char_index == core.text.length-1) clearInterval(cheat);
var wordLength = core.words[core.cur_word_index].char_list.length;
core.bound_keypress_handler({key: core.cur_char.chr});
}, (Math.floor(Math.random() * 15) + 10))
}, (12000)/wpm)}
setInterval( () => {
    if(typeof document.querySelector(".navbar-continue") != null){
        document.querySelector(".navbar-continue").click()
        var variation = 8;
        wpm = origwpm + (Math.floor(Math.random() * variation) - variation/2);
        setTimeout(setCheat, 3000);
    }
}, 2500)
setCheat()})();

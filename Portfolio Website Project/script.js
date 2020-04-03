var name = 'Brendan Morrison';
var i = 0;
function textAnimation(text, id) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        console.log(i);
        setTimeout(function(){
            textAnimation(text, id);
        }, 100);
    }
}

window.addEventListener("load", function(){
    textAnimation(name, "headerText");
});




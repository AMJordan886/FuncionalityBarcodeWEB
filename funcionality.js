
const d = document;
/*
var $first = d.getElementById("first_input").value,
    $second = d.getElementById("second_input").value,
    $third = d.getElementById("third_input").value;
*/
/*
focusMethod = function getFocus() {
    d.getElementById("first_input").focus();
    console.log("que pasa")
    console.log($first)

}*/


//function funcionality(/*firstInput, secondInput, thirdInput*/) {
    /*
    setTimeout(() => {
        }, 1000);
      */
//}


//focusMethod();
//funcionality();
/*

if ($first == $second){
    console.log($first);
} else{
    alert("error")
}*/


/*function load(){
}
window.onload = load;*/




function innerautofocus(){
    let injectioninput = d.getElementById("div_input");
    injectioninput.innerHTML = `<input type="text" placeholder="first" id="first_input" autofocus>`;
    console.log("Cargando");
}

window.onload = innerautofocus;

//window.onload = (innerautofocus);






/*
function verifyContent(){
let $first = d.getElementById("first_input").value;
if ($first > 0){
    setTimeout(() => {
        funcionality()
    }, 8000);
}
}*/



/*
function verifyContent(){
    let $first = d.getElementById("first_input").value;

do {
d.getElementById("second_input").value;

} while ($first > 0)



    if ($first > 0){
        setTimeout(() => {
            funcionality()
        }, 8000);
    }
}
*/


/*
setInterval(() => {
    funcionality()
}, 5000);

*/
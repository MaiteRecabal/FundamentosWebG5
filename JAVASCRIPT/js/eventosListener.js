var miBoton = document.getElementById("miBoton");
var miBoton2 = document.getElementsByTagName("button");
//Listener
miBoton.addEventListener('click', function() {
    miFuction();
    //alert("Mi listener");

});
miBoton2[0].addEventListener('click', function() {
    //miFunction();
    alert("Mi Listener");
});

function miFuncion() {
    console.log('funcion llamada desde listener');

}
var nombre = document.getElementById("nombre");
nombre.addEventListener('mouseover', function() {
    console.log("mouse over");
});
nombre.addEventListener('mouseout', function() {
    console.log("mouse out");
});
nombre.addEventListener('change', function() {
    console.log("change");
});
nombre.addEventListener('blur', function() {
    console.log("blur");
});
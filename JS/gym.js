
function datos() {
    let estatu = parseFloat(document.getElementById('estatura').value);
    let pes = parseFloat(document.getElementById('peso').value);
    let total = pes/(estatu*estatu);
    document.saber.dato.value = total.toFixed(1);

 if (total < 18.5 ) {
   alert("Tu peso es inferior al normal")
   
 }
 if (total > 18.5 && total <25.0) {
  alert(" Tu peso esta normal");
  
}
if (total > 25.0 && total <30.0) {
  alert("Tu peso es superior al normal");
  
}
if (total > 30.0 ) {
  alert("Tienes obesidad");
  
}
if  (total == " "){
  alert("Ingrese un peso valido");
}

}

  
  function guardar_datos() {
    let nombre = (document.getElementById('nombre').value);
    let edad= (document.getElementById('edad').value);
    let estatura = (document.getElementById('estatura').value);
    let peso= (document.getElementById('peso').value);

    let dataUser = { 'name': nombre, 'edad': edad, 'estatura': estatura, 'peso': peso};
    localStorage.setItem("data", JSON.stringify(dataUser));
}

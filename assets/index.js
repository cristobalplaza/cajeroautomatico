let ingresar = document.querySelector("#ingresar")
let enter = document.querySelector("#enter")
let inputUsername = document.querySelector("#usuario")
let inputPassword = document.querySelector("#password")
let inputMonto = document.querySelector("#monto") 
let operacion1 = document.querySelector("#operacion1")
let total = document.querySelector("#dinerototal")
let datoUsuario  = document.querySelector("#datosusuario")
let datoOperacion = document.querySelector("#datosoperacion")
let passwordCorrecta = "2345"
let usuarioCorrecto = "Juan"
let saldo = 600000;
let intentos = 0
enter.addEventListener("click", calcular)
ingresar.addEventListener("click", ingresarUsuario)

datoOperacion.style.display = "none";


function ingresarUsuario() {
    console.log("usuario: ", inputUsername.value);
  
    if (intentos < 3) {
      if (inputUsername.value === "Juan" || parseInt(inputPassword.value) === 2345) {
        alert("Datos correctos");
        console.log("username: ", inputUsername.value);
        console.log("password: ", inputPassword.value);
        datoUsuario.style.display = "none";
        datoOperacion.style.display = "block";
      } else {
        intentos++;
        alert("Datos incorrectos. Intento #" + intentos);
        inputUsername.value = "";
        inputPassword.value = "";
      }
    } else {
      alert("Has alcanzado el número máximo de intentos. Acceso bloqueado.");
    }
}
  

function calcular() {
    let monto = Number(inputMonto.value);
  
    if (operacion1.value === "1") {
      console.log("Depósito");
      let deposito = Number(monto + saldo);
      saldo = deposito;
      total.innerHTML = `Su saldo actual es de ${deposito}`;
    } else if (operacion1.value === "2") {
      console.log("Retiro");
      if (monto <= saldo) {
        const confirmacion = confirm("¿Estás seguro de realizar este retiro?");
        if (confirmacion) {
          let retiro = Number(saldo - monto);
          saldo = retiro;
          total.innerHTML = `Su saldo actual es de ${retiro}`;
        } else {
          alert("Retiro cancelado.");
        }
      } else {
        alert("Saldo insuficiente. No puedes retirar más dinero del que tienes.");
      }
    } else if (operacion1.value === "3") {
      console.log("Consultar saldo");
      total.innerHTML = `Su saldo actual es de ${saldo}`;
    } else {
      alert("Ingresa una acción válida");
    }
  }
  
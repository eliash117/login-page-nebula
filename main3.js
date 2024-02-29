function showPaymentForm() {
    var paymentMethod = document.getElementById("paymentMethod").value;
    var creditCardForm = document.getElementById("creditCardForm");
    var paypalForm = document.getElementById("paypalForm");
    var transferForm = document.getElementById("transferForm");

    // Ocultar todos los formularios primero
    creditCardForm.style.display = "none";
    paypalForm.style.display = "none";
    transferForm.style.display = "none";

    // Mostrar el formulario correspondiente según el método de pago seleccionado
    if (paymentMethod === "tarjeta") {
        creditCardForm.style.display = "block";
    } else if (paymentMethod === "paypal") {
        paypalForm.style.display = "block";
    } else if (paymentMethod === "transferencia") {
        transferForm.style.display = "block";
    }
}

function processPayment() {
    // Aquí puedes agregar la lógica para procesar el pago
    // Recopila los datos del formulario según el método de pago seleccionado
    var paymentMethod = document.getElementById("paymentMethod").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var creditCardNumber = document.getElementById("creditCardNumber").value;
    var expirationDate = document.getElementById("expirationDate").value;
    var cvv = document.getElementById("cvv").value;
    var paypalEmail = document.getElementById("paypalEmail").value;
    var paypalPassword = document.getElementById("paypalPassword").value;
    var bankAccount = document.getElementById("bankAccount").value;
    var routingNumber = document.getElementById("routingNumber").value;

    // Ejemplo: Mostrar los datos en la consola para fines de demostración
    console.log("Método de Pago:", paymentMethod);
    console.log("Nombre de Usuario:", username);
    console.log("Contraseña:", password);

    // Dependiendo del método de pago, envía los datos relevantes al servidor para procesar el pago
}

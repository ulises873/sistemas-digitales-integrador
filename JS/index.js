function login() {  
    // Capturo la info del input del email
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  
    let telefono = document.getElementById("telefono").value;  

    // Imprimo los datos
    console.log(email);  
    console.log(password);  
    console.log(telefono);  

    // Verificamos si el email y el password son correctos
    if (email === "pepe@gmail.com" && password === "1234") {  
        alert("gracias por su compra");  

        // Llamamos al servidor para enviar el mensaje WhatsApp Business
        fetch("/enviar-mensaje", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                numero: telefono,
                 // el número que ingresó el usuario
                mensaje: "Bienvenidos a Mundo Pumba, te damos las gracias por confiar en nosotros"
            })
        })
        .then(response => response.json())
        .then(data => console.log("Mensaje enviado:", data))
        .catch(error => console.error("Error enviando mensaje:", error));

        // Redireccionamos la página
        location.href = "ingresar.html";  
    }  
}
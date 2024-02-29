// Funciones para mostrar y ocultar formularios
function showRegistrationForm() {
    document.getElementById("registrationContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
  }
  
  function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("registrationContainer").style.display = "none";
  }
  
  // Función de inicio de sesión
  function login() {
    // 1. Obtener valores del formulario
    const branch = document.getElementById("BRANCH").value.toLowerCase();
    const username = document.getElementById("username").value.toLowerCase();
    const password = document.getElementById("password").value;
  
    // 2. Validar datos (opcional)
    // Puedes agregar validaciones para asegurar que no estén vacíos, tengan formato correcto, etc.
  
    // 3. Simular una base de datos (reemplazar con API real)
    // La variable `users` simula una base de datos de usuarios.
    // Reemplazar con una llamada a tu API para obtener datos reales.
    const users = [
      { branch: "honduras", username: "usuario1", password: "contraseña1" },
      { branch: "argentina", username: "usuario2", password: "contraseña2" },
      // ... agregar más usuarios para otras sucursales
    ];
  
    // 4. Buscar usuario por nombre de usuario y rama
    const user = users.find(
      (u) => u.branch === branch && u.username === username
    );
  
    // 5. Validar credenciales
    if (user && user.password === password) {
      // 5.1 Redireccionar a la página correcta usando ventana emergente (temporal)
      // Reemplazar con redirección adecuada (ej: window.location.href = "pagina_segura.html")
      alert("Bienvenido/a " + username + "!");
    } else {
      // 5.2 Mostrar mensaje de error
      alert("Credenciales incorrectas. Intente nuevamente.");
    }
  }
  
  // Inicializar el formulario de inicio de sesión como visible
  window.onload = function () {
    showLogin();
  };
  
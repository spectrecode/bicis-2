function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contraseña = document.getElementById("input-password").value;

        if(nombre == null || nombre.length == 0 || /^[A-Z][a-z]*/.test(nombre) == false) {
            var span = document.createElement("span");
            var referencia= document.getElementById("name");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("Debe ingresar su nombre");
            span.appendChild(texto);
            return texto;
        } else if (apellido == null || apellido.length == 0 || /^[A-z][a-z]*/.test(apellido) == false) {
            var span = document.createElement("span");
            var referencia= document.getElementById("lastname");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("Debe ingresar su apellido");
            span.appendChild(texto);
            return texto;
        } else if (correo == null || correo.length == 0 || /^\s+$/.test(correo)) {
           	return alert('Ingresa tu Correo');
        } else if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
           	return alert('Ingresa tu contraseña');
         }
}
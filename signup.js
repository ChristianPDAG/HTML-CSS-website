//localStorage.clear()

//Función para validar relleno de formulario
function validar(){
    const name=document.getElementById('name').value;
    const lastName= document.getElementById('lastName').value;
    const rut= document.getElementById('rut').value;
    const userName= document.getElementById('username').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    if(name.length==0){
        alert('Debe ingresar el nombre');
        return false;
    }

    if (lastName.length==0){
        alert('Debe ingresar el apellido');
        return false;
    }

    //validaciones de RUT
    if (rut.length==0){
        alert('Debe ingresar el rut');
        return false;
    } else if (!/^([0-9]+-[0-9kK])$/.test(rut)){
        alert('Ingrese un RUT válido')
        return false;
    }

    //validaciones de nombre de usuario
    if (userName.length==0){
        alert('Debe ingresar el nombre de usuario');
        return false;
    } else if (usuarios && usuarios.some(usuario => usuario.userName === userName)){// si nombre de usuario ya existe no se podrá repetir
        alert('Nombre de usuario ya está registrado')
        return false;
    }

    //validaciones de correo
    if (email.length==0){
        alert('Debe ingresar el correo electrónico');
        return false;
    } else if (!email.includes("@")){
        alert('Ingrese un correo válido')
        return false;
    } else if (usuarios && usuarios.some(usuario => usuario.email === email)){// si correo electronico ya existe no se podrá repetir
        alert('Correo ya está registrado')
        return false;
    }           

    //validaciones de contraseña
    if (password!=document.getElementById('repeatPassword').value || password.length==0 ){
        alert('Verifique haber ingresado las contraseñas correctamente');
        return false;
    }

    return true;
}

function activarCheck(){
    var d = document.getElementById('registrar');
    if(document.getElementById("flexCheckDefault").checked==true){
        d.disabled = false;   //disabled activa y desactiva el botón
    }else{
        d.disabled= true;
    }
}

function guardarDato(){
    activarCheck();
    if(validar() == true){
        const name=document.getElementById('name').value;
        const lastName= document.getElementById('lastName').value;
        const rut= document.getElementById('rut').value;
        const userName= document.getElementById('username').value;
        const email= document.getElementById('email').value;
        const password= document.getElementById('password').value;

        var usuarios;
        var arr = JSON.parse(localStorage.getItem('usuarios'));
        if (arr == null) {
            usuarios = [];
            usuarios.push({
            nombre: name,
            apellido: lastName,
            rut: rut,
            userName: userName,
            correo: email,
            contrasenia: password
            });
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        } else {
            arr.push({
                nombre: name,
                apellido: lastName,
                rut: rut,
                userName: userName,
                correo: email,
                contrasenia: password
            });
            localStorage.setItem('usuarios', JSON.stringify(arr));
        }
    }
    
}     

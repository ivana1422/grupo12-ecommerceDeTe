


function qs (element) {
    return document.querySelector(element)
}


window.addEventListener('load', () => {
    let main = qs('#mainchange2');

    main.classList.add('active');

    let form = qs('form')
    let inputPass = qs('#passChange2');
    let inputPass2 = qs('#pass2Change2');
    let span1 = qs('#spanChange1');
    let span2 = qs('#spanChange2');
    let errores = false;

    inputPass.addEventListener('keyup', () => {
        switch(true){
            case !inputPass.value.trim():
                span1.innerHTML = "Campo requerido";
                inputPass.style.border = '4px solid red';
                break;

            default :
                inputPass.style.border = '4px solid green';
                span1.innerHTML = "";

        }
    })

    inputPass2.addEventListener('keyup', () => {
        switch(true){
            case !inputPass2.value.trim():
                span2.innerHTML = "Campo requerido";
                inputPass2.style.border = '4px solid red';
                errores = true
                break;

            case inputPass.value != inputPass2.value: 
                span2.innerHTML = "Las contraseñas no coinciden"
                inputPass2.style.border = '4px solid red';
                errores = true
                break;

            default :
                inputPass2.style.border = '4px solid green';
                span2.innerHTML = "";
                errores = false

        }
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(!errores){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cambiaste tu contraseña con exito!',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function(){
                form.submit();
            }, 1500);
        }
    })

})
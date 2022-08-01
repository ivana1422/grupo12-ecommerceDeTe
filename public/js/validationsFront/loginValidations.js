

window.addEventListener('load', () =>{


    let expression={
        name_surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        pass: /^.{8,12}$/, // 8 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    
    const inputEmail = document.getElementById("input__login__email");
    const inputPass = document.getElementById("input__login__pass");
    const iconEmail = document.getElementById("icon__login__email");
    const iconPass = document.getElementById("icon__login__pass");
    const form = document.querySelector("form")
    
    let emailBoolean = false;
    let passBoolean = false;
    
    const validInput = (input,icon)=>{
        input.classList.remove("input__invalid")
        input.classList.add("input__valid")
        icon.classList.remove("fa-circle-exclamation","icon__invalid")
        icon.classList.add("fa-solid", "fa-circle-check","icon__valid")
    }
    
    const invalidInput = (input,icon)=>{
        input.classList.remove("input__valid")
        input.classList.add("input__invalid")
        icon.classList.remove("fa-circle-check","icon__valid")
        icon.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
    }

    const validateEmail = (e) =>{
        if(e.value == ''){
            invalidInput(inputEmail,iconEmail)
            emailBoolean = false
            
        } else {
            if(expression.email.test(e)){
                validInput(inputEmail,iconEmail)
                emailBoolean = true
               
            }else{
                invalidInput(inputEmail,iconEmail)
                emailBoolean = false
               
            }
        }
    }


    inputEmail.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputEmail,iconEmail)
            emailBoolean = false
            
        } else {
            if(expression.email.test(e.target.value)){
                validInput(inputEmail,iconEmail)
                emailBoolean = true
               
            }else{
                invalidInput(inputEmail,iconEmail)
                emailBoolean = false
               
            }
        }
        
    })


    inputPass.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputPass,iconPass)
            passBoolean = false
        } else{
            if(expression.pass.test(e.target.value)){
                validInput(inputPass,iconPass)
                passBoolean = true
            }else{
                invalidInput(inputPass,iconPass)
                passBoolean = false
            }
        }
        
    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (!emailBoolean){
            validateEmail(inputEmail.value)
        }
        if(emailBoolean && passBoolean){
            form.submit()
        } else if (!emailBoolean){
            if(!inputEmail.classList.contains("input__valid")){
                invalidInput(inputEmail,iconEmail)
            }
            alert("Debe Completar los campos")
        }else if (!passBoolean){
            if(!inputPass.classList.contains("input__valid")){
                invalidInput(inputPass,iconPass)
            }
            alert("Debe Completar los campos")
        }
    })
})


    
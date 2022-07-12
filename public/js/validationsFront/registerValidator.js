let expression={
    name_surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    pass: /^.{8,12}$/, // 8 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const inputEmail = document.getElementById("input__register__email");
const iconEmail = document.getElementById("icon__register__email");
const inputName = document.getElementById("input__register__name");
const iconName = document.getElementById("icon__register__name");
const inputSurname = document.getElementById("input__register__lastName");
const iconSurname = document.getElementById("icon__register__lastName");
const inputPass = document.getElementById("input__register__pass");
const iconPass = document.getElementById("icon__register__pass");
const inputPass2 = document.getElementById("input__register__pass2");
const iconPass2 = document.getElementById("icon__register__pass2");
const terms = document.getElementById("terms");
const iconTerms = document.getElementById("icon__register__terms")
const inputFile = document.getElementById("avatar");
const spanFile = document.getElementById("file__error");
const form = document.querySelector("form");
const avatarPreview = document.getElementById("imagePreview");
let valuePass = '';

let emailBoolean = false;
let passBoolean = false;
let pass2Boolean = false;
let nameBoolean = false;
let surnameBoolean = false;
let termsBoolean = false;

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

    inputName.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputName,iconName)
            nameBoolean = false
        } else{
            if(expression.name_surname.test(e.target.value)){
                validInput(inputName,iconName)
                nameBoolean = true
            }else{
                invalidInput(inputName,iconName)
                nameBoolean = false
            }
        }
        
    })

    inputSurname.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputSurname,iconSurname)
            surnameBoolean = false
        } else {
            if(expression.name_surname.test(e.target.value)){
                validInput(inputSurname,iconSurname)
                surnameBoolean = true
            }else{
                invalidInput(inputSurname,iconSurname)
                surnameBoolean = false
            }
        }
        
    })

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
        }else{
            if(expression.pass.test(e.target.value)){
                validInput(inputPass,iconPass)
                valuePass = e.target.value
                passBoolean = true
            }else{
                invalidInput(inputPass,iconPass)
                passBoolean = false
            }
        }
        
    })
    inputPass2.addEventListener("keyup",(e)=>{
        
        if(e.target.value == ''){
            invalidInput(inputPass2,iconPass2)
            pass2Boolean = false
        }else{
            if(expression.pass.test(e.target.value) && (e.target.value === valuePass)){
                validInput(inputPass2,iconPass2)
                pass2Boolean = true
            }else{
                invalidInput(inputPass2,iconPass2)
                pass2Boolean = false
            }
        }
        
    })

    inputFile.addEventListener('change',
            function fileValidation(){
                let filePath = inputFile.value
                let allowefExtensions = /(.jpg|.png)$/i
                if(!allowefExtensions.exec(filePath)){
                    spanFile.innerHTML = 'imagen no válida, solo se permiten con extensión .jpg .png';
                    inputFile.value = '';
                    return false;
                } else {
                    spanFile.innerHTML = ''
                }
            })

    terms.addEventListener('change',(e)=>{
        if(e.target.value='on'){
            termsBoolean = true;
        } else {
            iconTerms.innerHTML = 'Acepte los términos y condiciones'
            termsBoolean = false;
        }
    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(emailBoolean && passBoolean && nameBoolean && surnameBoolean && pass2Boolean && termsBoolean){
            form.submit()
        } else if (!emailBoolean || !passBoolean || !nameBoolean || !surnameBoolean || !pass2Boolean || !termsBoolean){
            if(!inputName.classList.contains("input__valid") && !nameBoolean){
                invalidInput(inputName,iconName)
                
            }
            if(!inputSurname.classList.contains("input__valid") && !surnameBoolean){
                invalidInput(inputSurname,iconSurname)
                
            }
            if(!inputEmail.classList.contains("input__valid") && !emailBoolean){
                invalidInput(inputEmail,iconEmail)
                
            }
            if(!inputPass.classList.contains("input__valid") && !passBoolean){
                invalidInput(inputPass,iconPass)
                
            }
            if(!inputPass2.classList.contains("input__valid") && !pass2Boolean){
                invalidInput(inputPass2,iconPass2)
                
            }

            if(!termsBoolean){
                iconTerms.innerHTML = 'Acepte los términos y condiciones'
            } else {
                iconTerms.innerHTML = ''
            }
            alert("Debe Completar los campos")
        }
    })
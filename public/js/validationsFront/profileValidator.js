let expression={
    name_surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    pass: /^.{5,12}$/, // 5 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const inputEmail = document.getElementById("input__login__email");
const iconEmail = document.getElementById("icon__login__email");
const inputName = document.getElementById("input__login__name");
const iconName = document.getElementById("icon__login__name");
const inputSurname = document.getElementById("input__login__surname");
const iconSurname = document.getElementById("icon__login__surname");
const inputFile = document.getElementById("avatar")
const iconFile = document.getElementById("icon__avatar")
const spanFile = document.getElementById("file__error")
const form = document.querySelector("form")
const avatarPreview = document.getElementById("imagePreview")

//let errors = [];

let emailBoolean = true;
let nameBoolean = true;
let surnameBoolean = true;

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
            /*inputName.classList.remove("input__valid")
                inputName.classList.add("input__invalid")
                iconName.classList.remove("fa-circle-check","icon__valid")
                iconName.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                let nameVacio = e.target.value
                errors.push(nameVacio)*/
        } else{

            if(expression.name_surname.test(e.target.value)){
                validInput(inputName,iconName)
                nameBoolean = true
                /*inputName.classList.remove("input__invalid")
                inputName.classList.add("input__valid")
                iconName.classList.remove("fa-circle-exclamation","icon__invalid")
                iconName.classList.add("fa-solid", "fa-circle-check","icon__valid")*/
            }else{
                invalidInput(inputName,iconName)
                nameBoolean = false
                /*inputName.classList.remove("input__valid")
                inputName.classList.add("input__invalid")
                iconName.classList.remove("fa-circle-check","icon__valid")
                iconName.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                let nameVacio = e.target.value
                errors.push(nameVacio)*/
            }
        }
    })
    console.log(nameBoolean)
    inputSurname.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputSurname,iconSurname)
            surnameBoolean = false
            /*inputSurname.classList.remove("input__valid")
            inputSurname.classList.add("input__invalid")
            iconSurname.classList.remove("fa-circle-check","icon__valid")
            iconSurname.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
            let surnameVacio = e.target.value
            errors.push(surnameVacio)*/
        } else {

            if(expression.name_surname.test(e.target.value)){
                validInput(inputSurname,iconSurname)
                surnameBoolean = true
                /*inputSurname.classList.remove("input__invalid")
                inputSurname.classList.add("input__valid")
                iconSurname.classList.remove("fa-circle-exclamation","icon__invalid")
                iconSurname.classList.add("fa-solid", "fa-circle-check","icon__valid")*/
            }else{
                invalidInput(inputSurname,iconSurname)
                surnameBoolean = false
                /*inputSurname.classList.remove("input__valid")
                inputSurname.classList.add("input__invalid")
                iconSurname.classList.remove("fa-circle-check","icon__valid")
                iconSurname.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                let surnameVacio = e.target.value
                errors.push(surnameVacio)*/
            }
        }
    })
    console.log(surnameBoolean)
    inputEmail.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputEmail,iconEmail)
            emailBoolean = false
            /*inputEmail.classList.remove("input__valid")
            inputEmail.classList.add("input__invalid")
            iconEmail.classList.remove("fa-circle-check","icon__valid")
            iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
            let mailVacio = e.target.value
            errors.push(mailVacio)*/
        } else {

            if(expression.email.test(e.target.value)){
                validInput(inputEmail,iconEmail)
                emailBoolean = true
                /*inputEmail.classList.remove("input__invalid")
                inputEmail.classList.add("input__valid")
                iconEmail.classList.remove("fa-circle-exclamation","icon__invalid")
                iconEmail.classList.add("fa-solid", "fa-circle-check","icon__valid")*/
            }else{
                invalidInput(inputEmail,iconEmail)
                emailBoolean = false
                /*inputEmail.classList.remove("input__valid")
                inputEmail.classList.add("input__invalid")
                iconEmail.classList.remove("fa-circle-check","icon__valid")
                iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                let mailVacio = e.target.value
                errors.push(mailVacio)*/
            }
        }
    })
    console.log(emailBoolean)
    inputFile.addEventListener('change', 
            function fileValidation(){
                let filePath = inputFile.value
                let allowefExtensions = /(.jpg|.png)$/i
                if(!allowefExtensions.exec(filePath)){
                    spanFile.innerHTML = 'imagen no válida, solo se permiten con extensión .jpg .png';
                    inputFile.value = '';
                    return false;
                }else{
                    if(inputFile.files && inputFile.files[0]){
                        let reader = new FileReader();
                        reader.onload = function(e){
                            avatarPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                        };
                        reader.readAsDataURL(inputFile.files[0]);
                        spanFile.innerHTML = '';
                    }
                }
            })

            form.addEventListener('submit',(e)=>{
                e.preventDefault()
                if(/*emailBoolean && */nameBoolean && surnameBoolean){
                    form.submit()
                } else if (!emailBoolean || !nameBoolean || !surnameBoolean){
                    if(!inputName.classList.contains("input__valid") && !nameBoolean){
                        invalidInput(inputName,iconName)
                    }
                    if(!inputSurname.classList.contains("input__valid") && !surnameBoolean){
                        invalidInput(inputSurname,iconSurname)
                    }
                    /*if(!inputEmail.classList.contains("input__valid") && !emailBoolean){
                        invalidInput(inputEmail,iconEmail)
                    }*/
                    alert("Debe Completar los campos")
                }
            })

            /*form.addEventListener("submit",(e)=>{
                e.preventDefault()
                if((inputEmail.classList.contains("input__valid") && inputName.classList.contains("input__valid") && inputSurname.classList.contains("input__valid"))
                || ((!inputEmail.classList.contains("input__valid") && !inputEmail.classList.contains("input__invalid")) && (!inputName.classList.contains("input__valid") && !inputName.classList.contains("input__invalid")) && (!inputSurname.classList.contains("input__valid") && !inputSurname.classList.contains("input__invalid")))){
                    form.submit()
                } else if(!((inputEmail.classList.contains("input__valid") && inputName.classList.contains("input__valid") && inputSurname.classList.contains("input__valid"))
                || ((!inputEmail.classList.contains("input__valid") && !inputEmail.classList.contains("input__invalid")) && (!inputName.classList.contains("input__valid") && !inputName.classList.contains("input__invalid")) && (!inputSurname.classList.contains("input__valid") && !inputSurname.classList.contains("input__invalid"))))){
                    inputName.classList.remove("input__valid")
                    inputName.classList.add("input__invalid")
                    iconName.classList.remove("fa-circle-check","icon__valid")
                    iconName.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                    inputSurname.classList.remove("input__valid")
                    inputSurname.classList.add("input__invalid")
                    iconSurname.classList.remove("fa-circle-check","icon__valid")
                    iconSurname.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                    inputEmail.classList.remove("input__valid")
                    inputEmail.classList.add("input__invalid")
                    iconEmail.classList.remove("fa-circle-check","icon__valid")
                    iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                    alert("Debe Completar los campos")
                    
                }
            })*/

let expression={
    name_surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    pass: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

let validate=(input, expresion)=>{

    input.addEventListener("keyup",(e)=>{
        if(expresion.test(e.target.value)){
            input.classList.remove("input__invalid")
            input.classList.add("input__valid")
            icon.classList.remove("fa-circle-exclamation","icon__invalid")
            icon.classList.add("fa-solid", "fa-circle-check","icon__valid")
        }else{
            input.classList.remove("input__valid")
            input.classList.add("input__invalid")
            icon.classList.remove("fa-circle-check","icon__valid")
            icon.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
        }
    })
}




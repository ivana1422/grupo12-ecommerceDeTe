window.addEventListener("load",()=>{
    let $form= document.querySelector("#form");
    let $inputName = document.querySelector("#inputName");
    let $inputPass= document.querySelector("#inputPass");
    let $inputNameError= document.querySelector("#error-message");
    let $inputPassError= document.querySelector("#error-message");

    $inputPass.addEventListener("focus", () => {
        let inputLength = $inputPass.value.length;
        if (inputLength <= 8 ){
             $passError.innerText = "introducir por lo menos 8 caracteres"
        }else{
            $passError.innerText = ""
        }
       
    })

    $inputPass.addEventListener("change",(event)=> {
        let inputLength = $inputPass.value.length;})

})
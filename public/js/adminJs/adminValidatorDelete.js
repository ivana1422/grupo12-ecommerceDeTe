
function confirmDelete (){
    let respuesta = confirm("Estas seguro de que deseas eliminar este producto?")

    if(respuesta){
        return true
    }else{
        return false
    }
}

function confirmDeleteCategory (){
    let respuesta = confirm("Estas seguro de que deseas eliminar esta categoria de producto?")

    if(respuesta){
        return true
    }else{
        return false
    }
}
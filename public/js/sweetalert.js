const btnDelete = document.getElementById("deleteCount");
const formDelete = document.getElementById("formDelete")

formDelete.addEventListener("click",(e)=>{
    e.preventDefault()
    Swal.fire({
        title: 'Estas seguro?',
        text: "Se eliminaran todos tus datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F18D9E',
        cancelButtonColor: '#5BC8AC',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Tu cuenta fue eliminada',
            'success'
            )
            setTimeout(()=>{
              
              formDelete.submit()
            },3000)
            
        }
      })
})
function qs (element) {
    return document.querySelector(element)
}

window.addEventListener('load', () => {
    let main = qs('#mainChange')

    main.classList.add('active')

    let  contra = "tatito123"
    let pass = bcrypt.compareSync(contra, "$2a$10$0ZIGkgMRShqaXMFGyXcjUuwVxxT7tz73V6vBLW7./Uk")
    console.log(pass + " este es el resultado")
})





function qs (element) {
    return document.querySelector(element)
}


window.addEventListener('load', () => {
    let main = qs('#mainLoginPrincipal')

    main.classList.add('active')
})


function qs (element) {
    return document.querySelector(element)
}


window.addEventListener('load', () => {
    let main = qs('#mainRegisterA')

    main.classList.add('active')
})

function qs (element) {
    return document.querySelector(element)
}

window.addEventListener('load', () => {
    let main = qs('#mainChange')

    main.classList.add('active')
})





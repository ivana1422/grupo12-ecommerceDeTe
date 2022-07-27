function qs (element) {
    return document.querySelector(element)
}


window.addEventListener('load', () => {
    let main = qs('#mainchange2')

    main.classList.add('active')
})
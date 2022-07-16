function qs (element) {
    return document.querySelector(element)
}


window.addEventListener('load', () => {
    let section = qs('#sectionProfileA')

    section.classList.add('active')
})
function editElement(selector, toReplace, replacer) {
    let text = selector.innerHTML
    while (text.includes(toReplace)) {
        text = text.replace(toReplace, replacer)
    }
    selector.innerHTML = text
}
const handleWheel = event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
}

document.querySelector('.items').addEventListener('wheel', event => handleWheel(event) )
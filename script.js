const container = document.querySelector(".container")

for(let i=0; i<256; i++){
    const div = document.createElement('div')
    div.textContent = 'a'
    div.className += 'pixel'
    container.appendChild(div)
}

const pixels = document.querySelectorAll('.pixel')

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black'
    })
})
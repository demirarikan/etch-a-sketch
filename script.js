const container = document.querySelector(".container")

for(let i=0; i<256; i++){
    const div = document.createElement('div')
    div.classList.add('pixel')
    
    div.addEventListener('mouseover', () => {
        div.classList.add('black')
    })

    container.appendChild(div)
}

const pixels = document.querySelectorAll('.pixel')

// pixels.forEach((pixel) => {
//     pixel.addEventListener('mouseover', () => {
//         pixel.classList.add('black')
//     })
// })

const resetbtn = document.querySelector('.resetbtn')

resetbtn.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.classList.remove('black')
    })
    let size = prompt('enter a new size for the grid', '16')
    container.innerHTML = ''
    for(let i=0; i<size*size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', () => {
            div.classList.add('black')
        })    

        container.appendChild(div)
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
})
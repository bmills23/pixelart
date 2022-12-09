const button = document.querySelector('button')

const generator = document.querySelector('#generator')

const grid = document.querySelector('#grid')

button.addEventListener('click', () => {
    var length = document.querySelector('#length').value
    for (let i = 0; i < length*length; i++){
        var div = document.createElement('div')
        grid.append(div)
    }
    generator.hidden = true
})
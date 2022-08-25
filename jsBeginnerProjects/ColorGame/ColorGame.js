let head = document.getElementById('head')
let colorReset = document.getElementById("new-colors")
let easy = document.getElementById("easy")
let hard = document.getElementById("hard")
let colorHolders = document.getElementsByClassName('color-holder')



const randomBetween = (min, max) =>  min + Math.floor(Math.random() * (max - min + 1));



colorReset.addEventListener('click', () => {
    let color = random_rgb();
    const rightHolder = randomBetween(0, 5);
    head.innerHTML = `<h1 f="">THE GREAT<br>${color}<br>Guessing GAME</h1>`
    
    for (let i = 0; i < colorHolders.length; i++) { 
        if( i === rightHolder){
            colorHolders[i].style.backgroundColor = color;
            console.log('mamkamu')
        } else{
            colorHolders[i].style.backgroundColor = random_rgb();
            console.log('otitaka')
        }
     
    };


    colorHolders(rightHolder).style.backgroundColor =  color

    for (let i = 0; i < colorHolders.length; i++) {
        colorHolders[i].addEventListener('click', () => {

            if (color === colorHolders[i].style.backgroundColor) {
                alert('You win')
            } else {
                colorHolders[i].style.zIndex = -1;
            }

        })
        }




})


for (let i = 0; i < colorHolders.length; i++) {
    colorHolders[i].addEventListener('click', () => {
     let color = head.innerText.split(' ')
        

        if (color[1] === colorHolders[i].style.backgroundColor) {
            alert('You win')
        } else {
            colorHolders[i].style.zIndex = -1;
        }

    })
    }

easy.addEventListener('click', () => {

    colorHolders[3].style.zIndex = -1;
    colorHolders[4].style.zIndex = -1
    colorHolders[5].style.zIndex = -1;
    easy.style.backgroundColor = 'rgb(10, 160, 160)';
    easy.style.color = 'rgb(255, 255, 255)';
    hard.style.backgroundColor = ' rgb(255, 255, 255)';
    hard.style.color = 'rgb(10, 160, 160)';
})

hard.addEventListener('click', () => {

    colorHolders[3].style.zIndex = 1;
    colorHolders[4].style.zIndex = 1
    colorHolders[5].style.zIndex = 1;
    easy.style.backgroundColor = 'rgb(255, 255, 255)';
    easy.style.color = 'rgb(10, 160, 160)';
    hard.style.backgroundColor = 'rgb(10, 160, 160)';
    hard.style.color = 'rgb(255, 255, 255)';
})


function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}


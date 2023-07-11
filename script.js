const getColor = () => {
    let hexColor = '#';
    let string = '0123456789ABCDEF'
    for(let i=0; i<6; i++){

    hexColor += string[Math.floor(Math.random()*16)];
     
    }
    document.querySelector('#color-code').innerText = hexColor;
    document.querySelector('.main').style.backgroundColor = hexColor;    
}

document.querySelector("#btn").addEventListener('click' , (event) => {
   getColor();
 
})

getColor();
const button = document.getElementById('bulb-switch');
var image = document.getElementById('bulb');

button.addEventListener('click', () =>{
    if(button.textContent=='ON'){
        image.src = "img/pic_bulbon.gif";
         button.textContent = 'OFF'

    }
    else{
        image.src="img/pic_bulboff.gif"
        button.textContent = 'ON'
    }
});


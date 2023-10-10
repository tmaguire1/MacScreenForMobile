const screenImageElement = document.querySelector('.animation-container .mac-screen');

const animationContainer = document.querySelector('.animation-container');


const resizeAnimatedContainer = () => {  /// run every time image is loaded and at the start in case image is already loaded


    animationContainer.style.height = `${screenImageElement.offsetHeight}px`

    animationContainer.style.width = `${screenImageElement.offsetWidth}px`


    

}



screenImageElement.addEventListener('load', () => {


    resizeAnimatedContainer();


    
    
}, false)


resizeAnimatedContainer();

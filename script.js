var menu = document.getElementById('menu');
var altura = menu.offsetTop; //134

window.addEventListener('scroll',function(){
    if(window.pageYOffset>134){
        menu.classList.add('fixed');
        
    }else{
        menu.classList.remove('fixed');
        
        
    }
});

let menu =document.getElementById('navbar1');
console.log(menu);
let toogle_open =document.getElementById('toogle_open');
let toogle_close =document.getElementById('toogle_close');


toogle_open.addEventListener('click',tpgglleMenu);
toogle_close.addEventListener('click',tpgglleMenu);
function tpgglleMenu(){
    menu.classList.toggle('show_menu');

    if(menu.classList.contains('show_menu')){
        toogle_open.style.display='none';
        toogle_close.style.display='block';
    }
    else{
        toogle_open.style.display='block';
        toogle_close.style.display='none';
    }
}



const navEL = document.querySelector('.wrapper');
window.addEventListener('scroll',()=>{
 if(window.scrollY >= 56){
   navEL.classList.add('navbar-scrolled');
 }else if (window.scrollY <= 56){
   navEL.classList.remove('navbar-scrolled')
 }
});


const enlace = document.getElementById("micv");
     enlace.href="#";
     enlace.addEventListener('click', function(){
        window.open('./doc/t.pdf','_blank');
     });






let search = document.querySelector('.searchBox');
document.querySelector('#searchIcon').onclick =()=>{
    search.classList.toggle('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow', window.scrollY>0 );
});
const sections=document.querySelectorAll("#section");
const windowHeight=window.innerHeight;
const navigation=document.querySelector('.navigation');
function reset(){
    for(var i=0;i<navigation.children.length;i++){
        navigation.children[i].classList.remove('selected');
    }
}

// function for scroll event
function scrl(){
    
    const scrollTop=window.scrollY;
    sections.forEach(function(section,i){
        console.log(window.scrollY);
        if(i){
            reset();
    navigation.children[i].classList.add('selected');
        }
});
}







window.addEventListener('scroll',scrl());

document.querySelectorAll(".navigation li").forEach(function(item, i){
    item.addEventListener('click',function(){
        window.scrollTo({
            top: i * windowHeight,
            behavior: 'smooth'
        })
    })
})
const btn=window.document.querySelector("#btn");
const left=window.document.querySelector(".left");

console.log(btn);

let bool=true;

btn.addEventListener('click',()=>{
    if(window.innerWidth<=450){
        console.log("clicked from mobile");
        if(bool){
            left.style.display='inline';
            bool=false;
        }else{
            left.style.display='none';
            bool=true;
        }
        

    }else{
        console.log("clicked from pc");
        left.style.display='inline';
    }
})
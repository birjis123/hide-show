

// Without EventListener

// function hideshow(){
//     let button=document.getElementById('btn') as HTMLButtonElement
//     let para= document.getElementById('para') as HTMLParagraphElement
//     if(para.style.display != 'none'){
//     para.style.display= 'none';

//     }else{
//         para.style.display='block';
//     }; 
// }
// Add Event Listener 
let button=document.getElementById('btn') as HTMLButtonElement
let para= document.getElementById('para') as HTMLParagraphElement

button.addEventListener('click', function (){
    if(para.style.display === 'none'){
        para.style.display='block';
    button.textContent='hide'
    }else{
        para.style.display = 'none';
        button.textContent='show';
    }
});
 
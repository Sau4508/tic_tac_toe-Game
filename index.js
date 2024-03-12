let boxes =document.querySelectorAll('.box');
let reset =document.querySelector('#reset');
let newbtn =document.querySelector('#new-btn');
let msgContainer =document.querySelector('.msg-container');
let msg =document.querySelector('#msg');

let turn0=true;


let winPattern =[

    [0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

const resetGame=()=>{

    turn0 =true;
    enablesBoxes();
    msgContainer.classList.add('hide');

}




boxes.forEach( (box)=> {

    box.addEventListener('click',()=>{

        if(turn0){
        box.innerText='0';
        turn0 =false;
        
    }
    else{
        box.innerText='X';
        turn0 =true;

        }
        box.disabled =true;
        checkWinner();
    });
    
});

const disablesBoxes =()=>{

    for (let box of boxes){
        box.disabled=true;
    }
}
const enablesBoxes =()=>{

    for (let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}
const showWinner =(winner)=>{
    msg.innerText =`congratulation,Winner is${winner} `;
    msgContainer.classList.remove('hide');
    disablesBoxes();

}

const checkWinner =()=>{

    for(let pattern of winPattern){
        console.log(boxes[pattern[0]])

        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText ;

        if(posval1 !="" && posval2!='' && posval3 !=''){

            if(posval1 ===posval2 && posval2===posval3)
            {
                showWinner(posval1);
            }
        
            
        }

        

    }
}

newbtn.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);

const drawMatch =()=>{
    msg.innerText =`match is draw `;
    msgContainer.classList.remove('hide');
    // disablesBoxes();

}


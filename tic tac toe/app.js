let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
var count = 0;

let turnO = true;//playerX,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener('click',() =>{
        console.log("box was clicked");
        
        if(turnO){//playerO
            box.innerText = "O";
            turnO= false;
        }
        else{//Playerx
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner(count);
        
    });
});
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const  showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const  showDraw = ()=>{
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = (turn)=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        //console.log(pos1Val,pos2Val,pos3Val);
        if ( pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val  && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
        if(turn == "9"){
            showDraw();
        }  
    }
};

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);

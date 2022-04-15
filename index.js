const buttons = document.querySelectorAll('button');
let heads=1;
let tails=0;
let playerscore=0;
let computerscore=0;

function displaySel(player,computer){
    const playerSel = document.querySelector('#player');
    const ComputerSel = document.querySelector('#computer');
if(user==='heads'){
    playerSel.style.color='red';
}
if(user==='tails'){
    playerSel.style.color='blue';
}
if(computer==='heads'){
    ComputerSel.style.color='green';
}
if(computer==='heads'){
    ComputerSel.style.color='yellow';
}
}
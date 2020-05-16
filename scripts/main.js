
let tmp;
let ttmp;
let tttmp;

function toaddup(){
    tmp = document.querySelector("input[name=options]:checked").value
    sessionStorage.amount = Number(sessionStorage.amount) + Number(tmp)
    sessionStorage.tamount = Number(tmp)
}

function tosubup(){
    ttmp = sessionStorage.amount
    tttmp = sessionStorage.tamount
    sessionStorage.amount = Number(ttmp) - Number(tttmp)
}
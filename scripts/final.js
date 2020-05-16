let amt = Number(sessionStorage.amount)

if(amt <= 50){
    document.querySelector('#the').innerHTML = document.querySelector('#H0-50').innerHTML;
    document.querySelector('#thingsaboutme').innerHTML = document.getElementById('0-50').innerHTML;
    document.querySelector('#bestjobsforme').innerHTML = document.getElementById('L0-50').innerHTML;
}else if( amt > 50 && amt <= 100){
    document.querySelector('#the').innerHTML = document.querySelector('#H50-100').innerHTML;
    document.querySelector('#thingsaboutme').innerHTML = document.getElementById('50-100').innerHTML;
    document.querySelector('#bestjobsforme').innerHTML = document.getElementById('L50-100').innerHTML;
}else if( amt > 100 && amt <= 150){
    document.querySelector('#the').innerHTML = document.querySelector('#H100-150').innerHTML;
    document.querySelector('#thingsaboutme').innerHTML = document.getElementById('100-150').innerHTML;
    document.querySelector('#bestjobsforme').innerHTML = document.getElementById('L100-150').innerHTML;
}else if( amt > 150 && amt <= 200){
    document.querySelector('#the').innerHTML = document.querySelector('#H150-200').innerHTML;
    document.querySelector('#thingsaboutme').innerHTML = document.getElementById('150-200').innerHTML;
    document.querySelector('#bestjobsforme').innerHTML = document.getElementById('L150-200').innerHTML;
}
function hitung(){
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let hasil = parseInt(x) + parseInt(y);
    document.getElementById('hasil').innerHTML = hasil
}
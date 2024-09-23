function Convert(){
    var kilometers = parseFloat(document.getElementById('kg').value);
    var pounds = kilometers * 2.205;
    document.getElementById('result').innerHTML = "Pounds : "+pounds;
}
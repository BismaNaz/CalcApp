function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
 
    var result = document.getElementById("result");
    result.value="";
}

function getResult(){

    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function del() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}

function sqrt() {
    var x = document.getElementById("result").value;
    result.value = Math.sqrt(x);
}

function powerSqr() {
    var x = document.getElementById("result").value;
    result.value = Math.pow(x, 2);
}

function cube() {
    var x = document.getElementById("result").value;
   result.value = Math.pow(x, 3);
}
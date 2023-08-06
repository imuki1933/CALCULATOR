let inputResult = document.getElementById("result");
let ope = document.getElementsByClassName("ope_btn")
let lastChar = (inputResult.innerHTML.charAt(inputResult.innerHTML.length -1));
const operator = ("+"||"="||"*"||"/")

function AC_click(){
    inputResult.innerHTML = "0";
}

function equal_click() {
    inputResult.innerHTML = eval(inputResult.innerHTML)
}

function ope_click(val){
    if (lastChar ===  operator){
        inputResult.innerHTML = inputResult.innerHTML.slice(0, -1) + val;
    } else {
        inputResult.innerHTML += val;
    }
}

function num_click(val){
    if(inputResult.innerHTML =="0" && val == "0"){
        inputResult.innerHTML = "0";
      }else if(inputResult.innerHTML == "0" && val == "00"){
        inputResult.innerHTML = "0";
      }else if(inputResult.innerHTML == "0" && val == "."){
        inputResult.innerHTML = "0.";
      }else if(inputResult.innerHTML == "0"){
        inputResult.innerHTML = val;
      }else{
        inputResult.innerHTML += val;
      }

      
}
  
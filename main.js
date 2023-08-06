let inputResult = document.getElementById("result");

function AC_click(){
    inputResult.innerHTML = "0";
}

function equal_click() {
    inputResult.innerHTML = eval(inputResult.innerHTML)
    console.log(eval(inputResult.innerHTML))
}

function ope_click(val){

    // console.log(`${val}演算子が入力されました`)
    // console.log(`今回の演算子を入力する直前の文字は${inputResult.innerHTML.slice(-1)}です`)

    if ( inputResult.innerHTML.slice(-1) =="+" || 
         inputResult.innerHTML.slice(-1) =="-" || 
         inputResult.innerHTML.slice(-1) =="*" ||
         inputResult.innerHTML.slice(-1) =="/") {

        inputResult.innerHTML = inputResult.innerHTML.slice(0, -1) + val;
    } else {
        inputResult.innerHTML += val;
    }
}

function num_click(val){
    
    // console.log(`今入力された数字は${(val)}です`);

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
  
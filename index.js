const idnum1 = document.querySelector("#num1");
const opr = document.querySelector("#opr");
const idnum2 = document.querySelector("#num2");
let num_1;
let num_2;
let answer = document.querySelector("#answer");
let op;
let nums = "";
let nums2 = "";






document.addEventListener("click", function(event) {
  if (event.target.classList.contains("res"))
    reset();

  if(event.target.classList.contains("del")){
    if(answer.textContent){
      answer.textContent ="";

    }
    else if(idnum1.textContent && idnum2.textContent && opr.textContent){
      idnum2.textContent = "";
      nums2 = "";
      num_2 = "";
    }
    else if(idnum1.textContent && opr.textContent){
      opr.textContent = "";
      op = "";
    }
    else{
      reset();
    }

  }


  if (event.target.classList.contains("cal")) {

    if (event.target.classList.contains("n") && !(opr.textContent)) {
      nums += event.target.textContent
      idnum1.textContent = nums;
      console.log(typeof nums)
      num_1 = Number(nums);
    }
    if (event.target.classList.contains("op") && !(opr.textContent)) {
      op = event.target.textContent
      opr.textContent = op;

    }

    if (event.target.classList.contains("n") && opr.textContent && !(answer.textContent)) {
      nums2 += event.target.textContent
      idnum2.textContent = nums2;
      if (!isNaN(event.target.textContent))
        num_2 = Number(nums2);


    } else if (event.target.classList.contains("equal")) {

      operator(op);
    }

  }
  event.stopPropagation();
});



// function test(n1, op, n2) {
//   if (n1 && op && n2)
//     return true;
// }

function operator(op) {
  switch (op) {
    case "+":
      add();
      break;
    case "-":
      sub();
      break;
    case "*":
      mul();
      break;
    case "/":
      div();
      break;
    default:

  }
}

function add() {
  answer.textContent = num_1 + num_2;
}

function sub() {
  answer.textContent = num_1 - num_2;
}

function mul() {
  answer.textContent = num_1 * num_2;
}

function div() {
  answer.textContent = num_1 / num_2;
}
//use calculator
function useCal() {

}
//clear calculator
function reset() {
  nums = "";
  nums2 = "";
  num_1 = "";
  num_2 = "";
  idnum1.textContent = "";
  answer.textContent = "";
  idnum2.textContent = "";
  opr.textContent = "";
}

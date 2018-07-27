

function run1(){
	document.case.display.value += "1"
};

function run2(){
  document.case.display.value += "2"
};

function run3(){
  document.case.display.value += "3"
};

function run4(){
  document.case.display.value += "4"
};

function run5(){
  document.case.display.value += "5"
};

function run6(){
  document.case.display.value += "6"
};

function run7(){
  document.case.display.value += "7"
};

function run8(){
  document.case.display.value += "8"
};

function run9(){
  document.case.display.value += "9"
};

function run0(){
  document.case.display.value += "0"
};

function runMultiply(){
  document.case.display.value += "*"
};

function runDivide(){
  document.case.display.value += "/"
};

function runAdd(){
  document.case.display.value += "+"
};

function runSubtract(){
  document.case.display.value += "-"
};

function runDecimal(){
  document.case.display.value += "."
};

function runClear(){
  document.case.display.value = ""
};

function runNegative(){
  document.case.display.value += "-"
}

function runPercent(){
  document.case.display.value /= 100 
}

function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}

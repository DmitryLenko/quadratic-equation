module.exports = function solveEquation(equation) {
  const positive = "+";
  const negative = "-";
  var countpositive = findZnack(equation,positive);
  var countnegative = findZnack(equation,negative);
  var arraypositive = [];
  var arraynegative = [];
  var resultarray = [];
  var initpositivDisc = false;
  var axsquare = 0;
  var bx = 0;
  var c = 0;
   console.log(countpositive, countnegative);
;
  if(countnegative >= 0 && countnegative < countpositive) {
    resultarray = equation.split(positive);
    if(countnegative > 0) {
      initpositivDisc = true;
    }
  } else if(countpositive === 0) {
    resultarray = equation.split(negative);
    if(countnegative != 3) {
      initpositivDisc = true;
    }
  } else if(countpositive != 0 && countpositive <= countnegative) {
    arraypositive = equation.split(positive);
    arraynegative = equation.split(negative);
  } 
 //console.log(arraypositive,arraynegative);
  if(arraynegative.length >0 && arraypositive.length > 0 ) {
    var resarr = [];
    for(let i = 0; i < arraynegative.length; i++) {
      var timingarray = arraynegative[i].indexOf(positive);
      if(timingarray != -1) {
        var str = arraynegative[i];
        str = str.split(positive);
        arraynegative.splice(i,1, str[0], str[1]);
      }
    }
    resultarray = arraynegative;    
  }
console.log(resultarray);
}

function findZnack(array,znack) {
  var pos = 0;
  var count = 0;
  while (true) {
    var foundPos = array.indexOf(znack, pos);
    if (foundPos == -1) {
      break;
    } else { 
      count++;
      pos = foundPos + 1;
    }
  }
  return count;

}
